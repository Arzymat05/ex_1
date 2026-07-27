
export type BuildMode = "development" | "production"

export interface BuildEnv{
        port: number;
        mode:BuildMode;
    }

export interface BuildPath{
        entry:string,
        output:string,
        html:string,
        src:string,
    }

export interface BuildOption {
        mode: BuildMode;
        paths:BuildPath;
        isDev: boolean;
        port: number;

    }

