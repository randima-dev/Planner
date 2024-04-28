export interface UserDetails {
   userName: string;
}

export interface Vaccine {
   vaccineId?: string | number;
   title: string;
   status: string;
   dateValue: string | null;
   boosterValue: string;
   isVaccineReceived?: boolean | null;
   isTimerAvailable?: boolean | null;
}
