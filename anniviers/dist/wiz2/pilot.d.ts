declare class Pilot {
    private readonly ip;
    private readonly port;
    constructor(ip: string, port: number);
    getPilot(): Promise<any>;
    setPilot(red: number, green: number, blue: number, dimming?: number): Promise<any>;
    private sendAndReceive;
}
export { Pilot };
