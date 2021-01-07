export default interface DbConnection {
    client: any;
    uri: string;
    connect(user: string, pass: string, database: string): Promise<void>;
    disconnect(): Promise<void>;
    getCollection(name: string): Promise<any>;
}