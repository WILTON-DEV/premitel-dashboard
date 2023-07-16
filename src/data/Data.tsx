
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

export interface cardDataInterface{
    title: string;
    totalNumber: number;
    upDowns: number;
    icon: React.ReactNode;
}

export const cardData: cardDataInterface[] = [
    {
        title: "Total patients",
        totalNumber: 856,
        upDowns: 10.0,
        icon: <MdBarChart />,
    },
    {
        title: "Total Appointments",
        totalNumber: 3342,
        upDowns: 12.5,
        icon: <MdDashboard />,
    },
    {
        title: "Total Prescriptions",
        totalNumber: 856,
        upDowns: 9.2,
        icon: <IoDocuments />,
    },
    {
        title: "Rating",
        totalNumber: 4.2,
        upDowns: 7.0,
        icon: <MdBarChart />,
    }
]

