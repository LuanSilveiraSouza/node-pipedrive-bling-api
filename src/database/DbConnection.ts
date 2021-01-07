export default interface DbConnection {
    client: any;
    connect(user: string, pass: string, database: string): Promise<void>;
    disconnect(): Promise<void>;
}