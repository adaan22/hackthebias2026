"use client";

import { Aurora } from "@/components/animate-ui/components/backgrounds/aurora";
import { Field, Input, Select, createListCollection } from "@chakra-ui/react";

export default function Home() {
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}