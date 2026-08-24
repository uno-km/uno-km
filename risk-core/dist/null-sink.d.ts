import type { EventSink, StreamRecord } from './types.js';
export declare class NullSink implements EventSink {
    readonly name = "NullSink";
    emittedCount: number;
    emit(record: StreamRecord): void;
    emitBatch(records: StreamRecord[]): void;
    flush(): Promise<void>;
    close(): Promise<void>;
    reset(): void;
}
