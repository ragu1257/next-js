import wonderInfo from "../wonders"
import Link from "next/link"
import Image from "next/image"
interface Props {
  params: {
    id: string;
  };
}

export default function PhotoId({ params: { id } }: Props) {

const wonder = wonderInfo.find((wonder) => wonder.id === id);

  return (
    <>
    <div style={{padding: "20px", width: "36%", textAlign: "center", margin: "0 auto"}} key={wonder.id}>
    <h2>{wonder.title}</h2>
    <Image src={wonder.src
    } alt={wonder.title} />


    <p>{wonder.description}</p>
  </div>
  </>
  );
}