## Bug

Minimal reproduction and workaround for https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2391.

When using [instrumentation-undici](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/plugins/node/instrumentation-undici)
with `{ enabled: true }`, like in `getNodeAutoInstrumentations({'@opentelemetry/instrumentation-undici': { enabled: true } })`,
the undici instrumentation isn't applied.

## Reproduction Steps

1. run `npm install`
2. run `npm run start:issue` to observe `fetch` call span NOT being printed to console
3. run `npm run start:fixed` to observe `fetch` call span being printed to console

## Reason

No UndiciInstrumentation is applied because it [uses config.enabled](https://github.com/open-telemetry/opentelemetry-js-contrib/blob/8b35f786158767967597cfc70e053dac4abd72ab/plugins/node/instrumentation-undici/src/undici.ts#L91)
for both its internal state and the configuration itself.
