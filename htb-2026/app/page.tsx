"use client";

import { useState } from "react";
import { Aurora } from "@/components/animate-ui/components/backgrounds/aurora";
import { Button, Field, Input, Select, createListCollection } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [isAuditRun, setIsAuditRun] = useState(false);

  const employmentOptions = createListCollection({
    items: [
      { label: "Employed", value: "employed" },
      { label: "Self-Employed", value: "self-employed" },
      { label: "Unemployed", value: "unemployed" },
    ],
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-zinc-50">
      <Aurora
        colorStops={["#3B82F6", "#A855F7", "#F43F5E"]}
        blend={0.2}
        amplitude={0.75}
        speed={0.32}
        className="
          fixed 
          -top-[30vh] left-0 right-0 h-[160vh]
          z-0 opacity-90
          [filter:blur(38px)_saturate(1.9)_contrast(1.08)]
        "
      />

      <div className="fixed inset-0 z-[1] bg-white/64" />

      {isAuditRun && (
        <main className="relative z-10 flex min-h-screen items-center justify-end px-6 py-20">
          <div className="w-full max-w-2xl mr-8">
            <div
              className="
                rounded-[2.5rem]
                bg-white/90
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                border border-white/30
                p-8
              "
            >
              <Bar
                data={{
                  labels: ["Category A", "Category B", "Category C", "Category D", "Category E"],
                  datasets: [
                    {
                      label: "Audit Results",
                      data: [65, 78, 52, 89, 71],
                      backgroundColor: [
                        "rgba(168, 85, 247, 0.8)",
                        "rgba(244, 63, 94, 0.8)",
                        "rgba(59, 130, 246, 0.8)",
                        "rgba(168, 85, 247, 0.8)",
                        "rgba(244, 63, 94, 0.8)",
                      ],
                      borderColor: [
                        "rgba(168, 85, 247, 1)",
                        "rgba(244, 63, 94, 1)",
                        "rgba(59, 130, 246, 1)",
                        "rgba(168, 85, 247, 1)",
                        "rgba(244, 63, 94, 1)",
                      ],
                      borderWidth: 2,
                      borderRadius: 8,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top" as const,
                    },
                    title: {
                      display: true,
                      text: "Audit Results",
                      font: {
                        size: 20,
                        weight: "bold",
                      },
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                }}
              />
            </div>
          </div>
        </main>
      )}

      {!isAuditRun && (
        <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
          <div className="w-full max-w-3xl">
            <div
              className="
                rounded-[2.5rem]
                bg-white/90
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                border border-white/30
              "
            >
              <div className="px-24 py-24">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-6xl font-bold tracking-tight text-zinc-900 mb-4">
                    Test
                  </h1>

                  <p className="text-zinc-600 text-xl mb-16">
                    Enter your information below
                  </p>

                  <div className="w-full max-w-2xl">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                      <Field.Root>
                        <Field.Label
                          fontWeight="semibold"
                          mb="4"
                          fontSize="lg"
                          color="zinc.700"
                        >
                          Age
                        </Field.Label>
                        <Input
                          placeholder="25"
                          type="number"
                          size="lg"
                          bg="white"
                          borderColor="blackAlpha.200"
                          _hover={{ borderColor: "blackAlpha.300" }}
                          _focus={{
                            borderColor: "blue.400",
                            boxShadow: "0 0 0 3px rgba(59,130,246,0.18)",
                          }}
                        />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label
                          fontWeight="semibold"
                          mb="4"
                          fontSize="lg"
                          color="zinc.700"
                        >
                          Annual Income
                        </Field.Label>
                        <Input
                          placeholder="$75,000"
                          type="number"
                          size="lg"
                          bg="white"
                          borderColor="blackAlpha.200"
                          _hover={{ borderColor: "blackAlpha.300" }}
                          _focus={{
                            borderColor: "blue.400",
                            boxShadow: "0 0 0 3px rgba(59,130,246,0.18)",
                          }}
                        />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label
                          fontWeight="semibold"
                          mb="4"
                          fontSize="lg"
                          color="zinc.700"
                        >
                          Credit Score
                        </Field.Label>
                        <Input
                          placeholder="720"
                          type="number"
                          size="lg"
                          bg="white"
                          borderColor="blackAlpha.200"
                          _hover={{ borderColor: "blackAlpha.300" }}
                          _focus={{
                            borderColor: "blue.400",
                            boxShadow: "0 0 0 3px rgba(59,130,246,0.18)",
                          }}
                        />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label
                          fontWeight="semibold"
                          mb="4"
                          fontSize="lg"
                          color="zinc.700"
                        >
                          Employment Status
                        </Field.Label>
                        <Select.Root
                          collection={employmentOptions}
                          size="lg"
                        >
                          <Select.Control>
                            <Select.Trigger
                              bg="white"
                              borderColor="blackAlpha.200"
                              _hover={{ borderColor: "blackAlpha.300" }}
                            >
                              <Select.ValueText placeholder="Select status" />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                              <Select.Indicator />
                            </Select.IndicatorGroup>
                          </Select.Control>

                          <Select.Positioner style={{ zIndex: 9999 }}>
                            <Select.Content bg="white" style={{ zIndex: 9999 }}>
                              {employmentOptions.items.map((item) => (
                                <Select.Item
                                  item={item}
                                  key={item.value}
                                >
                                  {item.label}
                                  <Select.ItemIndicator />
                                </Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Positioner>
                        </Select.Root>
                      </Field.Root>
                    </div>
                  </div>

                  <div className="mt-24 w-full flex justify-center">
                    <Button
                      size="lg"
                      px={12}
                      py={4}
                      fontSize="lg"
                      fontWeight="semibold"
                      color="white"
                      rounded="full"
                      bgGradient="linear(to-r, purple.500, pink.500, rose.500)"
                      _hover={{
                        bgGradient: "linear(to-r, purple.600, pink.600, rose.600)",
                        transform: "scale(1.02)",
                        boxShadow: "xl",
                      }}
                      _active={{
                        transform: "scale(0.95)",
                      }}
                      transition="all 0.2s"
                      boxShadow="lg"
                      onClick={() => setIsAuditRun(true)}
                    >
                      Run Audit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}