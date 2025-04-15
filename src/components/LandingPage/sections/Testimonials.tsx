import { USER_TESTIMONY } from "@/constants/constants";
import TestimonyCard from "../TestimonyCard";

export default function Testimonials() {
  return (
    <section className="w-full h-[500px] py-20 bg-white">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-black sm:text-4xl">
          <span className="block">Loved by users</span>
        </h2>
        <p className="mt-3 mb-8 mx-auto text-2xl text-gray-500">
          See what our community is saying about TrabaHope
        </p>

        <div className="grid grid-cols-3 gap-8">
          {USER_TESTIMONY.map((u) => (
            <TestimonyCard
              photo={u.photo}
              name={u.name}
              jobTitle={u.jobTitle}
              testimony={u.testimony}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
