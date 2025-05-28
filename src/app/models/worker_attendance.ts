import { Worksite } from "./worksite";
import { Worker } from "./worker";
import { Helmet } from "./helmet";

export interface WorkerAttendance {
    id: number,         
	worker_id: number,
	worksite_id: number,
	start_at: string,
	end_at: string,
	helmet_id: number,
	Worker: Worker,
	Worksite: Worksite,
	Helmet: Helmet
}