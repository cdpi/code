type GetPilotMethod = "getPilot";
type SetPilotMethod = "setPilot";
type Method = GetPilotMethod | SetPilotMethod;
type GetPilotMessage = {
    method: GetPilotMethod;
    params: {};
};
type SetPilotMessage = {
    method: SetPilotMethod;
    params: {
        state: boolean;
        r: number;
        g: number;
        b: number;
        dimming?: number;
    };
};
type Message = GetPilotMessage | SetPilotMessage;
export { type GetPilotMethod, type SetPilotMethod, type Method, type GetPilotMessage, type SetPilotMessage, type Message };
