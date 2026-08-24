import type { EventSink, StreamRecord, CompositeSinkOptions } from './types.js';
export declare class CompositeSink implements EventSink {
    readonly name = "CompositeSink";
    private readonly sinks;
    private readonly timeoutMs;
    constructor(sinks: EventSink[], options?: CompositeSinkOptions);
    get downstreamSinks(): readonly EventSink[];
    private withTimeout;
    emit(record: StreamRecord): Promise<void>;
    emitBatch(records: StreamRecord[]): Promise<void>;
    flush(): Promise<void>;
    close(): Promise<void>;
}
