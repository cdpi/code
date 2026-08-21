type AudioOff = false;
type AudioOn = {};
type AudioConstraints = AudioOff | AudioOn;
type FacingMode = "user" | "environment" | "left" | "right";
type VideoOff = false;
type VideoOn = {
    facingMode: FacingMode;
    width: {
        ideal: number;
    };
    height: {
        ideal: number;
    };
};
type VideoConstraints = VideoOff | VideoOn;
declare function getMediaStream(audioConstraints: AudioConstraints, videoConstraints: VideoConstraints): Promise<MediaStream>;
declare function getVideoStream(mode: FacingMode, width: number, height: number): Promise<MediaStream>;
export { getMediaStream, getVideoStream };
