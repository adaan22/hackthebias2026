"use client";

import { Aurora } from "@/components/animate-ui/components/backgrounds/aurora";
import { Field, Input, Stack } from "@chakra-ui/react";

export default function Home() {
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

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div
          className="
            w-full max-w-xl
            rounded-3xl
            bg-white/85
            backdrop-blur-xl
            p-12
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            ring-1 ring-black/5
          "
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
              Test
            </h1>

            <div className="mt-10 w-full flex justify-center">
              <Stack gap="4" maxW="360px" w="100%">
                <Field.Root>
                  <Field.Label fontWeight="medium">
                    Age
                  </Field.Label>

                  <Input
                    placeholder="Enter your age"
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
              </Stack>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
