import { NodeSDK } from '@opentelemetry/sdk-node'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base'
import { register } from 'module'

const sdk = new NodeSDK({
  traceExporter: new ConsoleSpanExporter(),

  instrumentations: [
    getNodeAutoInstrumentations({
      '@opentelemetry/instrumentation-undici': { enabled: true }
    })
  ]
})

sdk.start()

register('@opentelemetry/instrumentation/hook.mjs', import.meta.url)
