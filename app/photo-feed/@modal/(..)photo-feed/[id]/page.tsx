import wonderInfo from "../../../wonders"
import Link from "next/link"
import Image from "next/image"
interface Props {
  params: {
    id: string;
  };
}

export default function PhotoId({ params: { id } }: Readonly<Props>) {

const wonder = wonderInfo.find((wonder) => wonder.id === id);

  return (
    <div className="photo-modal fixed inset-0 bg-gray-500 pt-40 bg-opacity-75 transition-opacity">
    <div style={{padding: "20px", width: "56%", textAlign: "center", margin: "0 auto"}} key={wonder.id}>

    <Image src={wonder.src
    } alt={wonder.title} />



  </div>
  </div>
  );
}