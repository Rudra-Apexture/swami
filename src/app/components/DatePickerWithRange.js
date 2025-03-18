// "use client";

// import * as React from "react";
// import { addDays, format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
// import { cn } from "@/app/lib/utils";
// import { Button } from "./ui/button";
// import { Calendar } from "./ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

// export function DatePickerWithRange({ className, onChange }) {
//     const [date, setDate] = React.useState({
//         from: new Date(2022, 0, 20),
//         to: addDays(new Date(2022, 0, 20), 20),
//     });

//     const handleDateSelect = (newDate) => {
//         setDate(newDate);
//         if (onChange) {
//             onChange(newDate); // Call the onChange prop
//         }
//     };

//     return (
//         <div className={cn("grid gap-4", className)}>
//             <Popover>
//                 <PopoverTrigger asChild>
//                     <Button
//                         id="date"
//                         variant="outline"
//                         className={cn("w-full justify-start text-left font-normal cursor-pointer", !date && "text-muted-foreground")}
//                     >
//                         <CalendarIcon className="mr-2 h-4 w-4" />
//                         {date?.from ? (
//                             date.to ? (
//                                 <>
//                                     {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
//                                 </>
//                             ) : (
//                                 format(date.from, "LLL dd, y")
//                             )
//                         ) : (
//                             <span>Pick a date range</span>
//                         )}
//                     </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                         initialFocus
//                         mode="range"
//                         defaultMonth={date?.from}
//                         selected={date}
//                         onSelect={handleDateSelect}
//                         numberOfMonths={2}
//                     />
//                 </PopoverContent>
//             </Popover>
//         </div>
//     );
// }


// "use client";

// import * as React from "react";
// import { addDays, format, endOfMonth, startOfMonth } from "date-fns"; // Import endOfMonth
// import { CalendarIcon } from "lucide-react";
// import { cn } from "@/app/lib/utils";
// import { Button } from "./ui/button";
// import { Calendar } from "./ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

// export function DatePickerWithRange({ className, onChange }) {
//     const today = new Date();
//     const currentMonthEnd = endOfMonth(today); // Get the last day of the current month
//     const currentMonthStart = startOfMonth(today);


//     const [date, setDate] = React.useState({
//         from: currentMonthStart, // Start of current month
//         to: currentMonthEnd,     // End of current Month
//     });



//     const handleDateSelect = (newDate) => {
//         setDate(newDate);
//         //add this validation
//         if (newDate && newDate.from && !newDate.to) {
//             setDate({ ...newDate, to: newDate.from })
//         }
//         if (onChange) {
//             onChange(newDate); // Call the onChange prop
//         }
//     };

//     return (
//         <div className={cn("grid gap-4", className)}>
//             <Popover>
//                 <PopoverTrigger asChild>
//                     <Button
//                         id="date"
//                         variant="outline"
//                         className={cn(
//                             "w-full justify-start text-left font-normal cursor-pointer",
//                             !date && "text-muted-foreground"
//                         )}
//                     >
//                         <CalendarIcon className="mr-2 h-4 w-4" />
//                         {date?.from ? (
//                             date.to ? (
//                                 <>
//                                     {format(date.from, "LLL dd, y")} -{" "}
//                                     {format(date.to, "LLL dd, y")}
//                                 </>
//                             ) : (
//                                 format(date.from, "LLL dd, y")
//                             )
//                         ) : (
//                             <span>Pick a date range</span>
//                         )}
//                     </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                         initialFocus
//                         mode="range"
//                         defaultMonth={today} // Show the current month
//                         selected={date}
//                         onSelect={handleDateSelect}
//                         numberOfMonths={2}
//                     />
//                 </PopoverContent>
//             </Popover>
//         </div>
//     );
// }

// "use client";
// import * as React from "react";
// import { addDays, format, endOfMonth, startOfMonth } from "date-fns"; // Import endOfMonth and startOfMonth
// import { CalendarIcon } from "lucide-react";
// import { cn } from "@/app/lib/utils";
// import { Button } from "./ui/button";
// import { Calendar } from "./ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

// export function DatePickerWithRange({ className, onChange }) {
//     const today = new Date();
//     const currentMonthEnd = endOfMonth(today); // Get the last day of the current month
//     const currentMonthStart = startOfMonth(today); // Get the first day of the current month.

//     const [date, setDate] = React.useState({
//         from: today, // <---  CHANGE HERE:  Start date is now today
//         to: currentMonthEnd,  // End of current Month
//     });



//     const handleDateSelect = (newDate) => {
//         setDate(newDate);
//         //add this validation
//         if (newDate && newDate.from && !newDate.to) {
//             setDate({ ...newDate, to: newDate.from })
//         }
//         if (onChange) {
//             onChange(newDate); // Call the onChange prop
//         }
//     };

//     return (
//         <div className={cn("grid gap-4", className)}>
//             <Popover>
//                 <PopoverTrigger asChild>
//                     <Button
//                         id="date"
//                         variant="outline"
//                         className={cn(
//                             "w-full justify-start text-left font-normal cursor-pointer",
//                             !date && "text-muted-foreground"
//                         )}
//                     >
//                         <CalendarIcon className="mr-2 h-4 w-4" />
//                         {date?.from ? (
//                             date.to ? (
//                                 <>
//                                     {format(date.from, "LLL dd, y")} -{" "}
//                                     {format(date.to, "LLL dd, y")}
//                                 </>
//                             ) : (
//                                 format(date.from, "LLL dd, y")
//                             )
//                         ) : (
//                             <span>Pick a date range</span>
//                         )}
//                     </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                         initialFocus
//                         mode="range"
//                         defaultMonth={today} // Show the current month
//                         selected={date}
//                         onSelect={handleDateSelect}
//                         numberOfMonths={2}
//                     />
//                 </PopoverContent>
//             </Popover>
//         </div>
//     );
// }

"use client";

import * as React from "react";
import { addDays, format, endOfMonth, startOfMonth } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function DatePickerWithRange({ className, onChange }) {
    const today = new Date();
    const currentMonthEnd = endOfMonth(today);
    const currentMonthStart = startOfMonth(today);

    const [date, setDate] = React.useState({
        from: today,
        to: currentMonthEnd,
    });

    const handleDateSelect = (newDate) => {
        setDate(newDate);
        if (newDate && newDate.from && !newDate.to) {
            setDate({ ...newDate, to: newDate.from });
        }
        if (onChange) {
            onChange(newDate);
        }
    };

    return (
        <div className={cn("grid gap-4", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant="outline"
                        className={cn(
                            "w-full justify-start text-left font-normal cursor-pointer",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date range</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={today}
                        selected={date}
                        onSelect={handleDateSelect}
                        numberOfMonths={2}
                        disabled={{ before: today }} // Disable dates before today
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}




