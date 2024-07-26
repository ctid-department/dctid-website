import { PortableText } from "next-sanity";

interface Props {
  title: string;
  address: any;
  email: string;
  phoneNumber: string;
}

const AddressList: React.FC<Props> = async ({
  title,
  address,
  email,
  phoneNumber,
}) => {
  return (
    <div className="md:w-[40%]">
      <h1 className="text-xl font-bold border-b-2 pb-2 mb-2">
        {title ?? "Address"}
      </h1>
      <PortableText value={address} />
      <span>{phoneNumber + " | "}</span>
      <a href={`mailto:${email}`} className="hover:underline">
        {email}
      </a>
    </div>
  );
};

export default AddressList;
