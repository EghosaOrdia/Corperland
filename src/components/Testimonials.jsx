import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-32 bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className=" text-3xl mb-4">
            What <span className="text-secondary-fixed">Corps Members</span> Say
            About Us
          </h2>
          <p className="text-lg opacity-80 mb-8">
            Real experiences from graduates and corps members just like you.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                data-alt="A portrait of a smiling young Nigerian woman"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCog4uOhD4f6lxaGosbOY8TOO5Jy2bCFEnrExmbZyvqC99B3JUEJkQEmStL_MxWa_3Ik2aEoYPafkz_3Uj0nVZPs8i5o97P151EDP7aJk288wWT-6BfUudn8ZrAJ6TuSO4byNrYwARTslSMgnORb3kNtupkycqWdQ30qRPjvw0NWhj8RVpeUDGzPgMkGJxcJxud9D1LSkFvNcrRDVOgBjwAZWTAxvNgsnh2MLEwKBgbk9X584x47MjRS5E-oLBTRSl3ka8gnfPU6VI"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                data-alt="A portrait of a handsome young African man"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAENCuP_F1NhP4TFnjrfhsQfyaxsU1ANqSzDizHrZbK1BwfDhDWDoTOGcbqDWsIHTgypis21o1BHSThTJJr7oBtqwJHcYRrAvUddaYaPZiTnB9g1NQp4R7niIb2_8WAxkApYsB1BUIdHaVzjAc-dNVgRNT0IQye_z5GSogFpj-Bw1YP6oOhEKs_TxTV9u5j1sK1FoZmQF3ma7EWQY_ZVJudhhs5cK8A7Lz39J5QtPCXZDZwwT8wSZ-tQlkXeBKQDFXadzYwWkon8OU"
              />
              <img
                className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                data-alt="A portrait of a confident young Nigerian female graduate"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAupjBfiipOJTcUWSgq0j6aNr4T1z_a5bI6nSvKyIFcN2cwWpA3blKxJB9qoNaFIhnuiLljkL9pcA1S49U6fUDLC94nxRGbRqYuLb15Ti5qmJf4RBr2AIYvFnWcUgGhf7sAanblIH_FabmnoBfXBpoWXI8nzCaNiFICZBg3rOS9h8k_RVOrCrHknVtFX27jI0snvP8QT3SEFDfLGZv--MMY7gJAFxetfFRpWbOOYZiYrqjnBPpELlgmOL0IOBxuqDnk1SDndF6y_0U"
              />
            </div>
            <p className="text-sm font-bold">Join 15k+ Happy Corpers</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
          <Quote size={40} className="mb-4 opacity-40" />
          <p className="font-inter mb-8 italic leading-relaxed">
            "Before Corperland, I was struggling to make ends meet. A friend
            convinced me to sign up and join the community. In just two weeks I
            won ₦20,000, and over time I collected more than ₦30,000 through
            their giveaways. Even better, my active participation led to being
            named Delta State Ambassador, complete with a stipend that helped
            when my PPA wasn't paying me. Corperland gave me much more than
            cash—it connected me with corps members across Nigeria, earned me
            respect, and opened real opportunities. Jump in, stay active, and
            you might be the next success story."
          </p>
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full object-cover"
              data-alt="Portrait of Madonna Chioma"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ8g6JfAGEzL8sx8VnhKWaTTbkZmhkIQpO7A1TsU9t0pSNbj8BNu6_WyWkTNi0fMd245anEz6AYDwczghVp2uUR4Bd1ENQa7Nu6Tfesgdz6XgMIKBbsFaSwE8I5m9OgPWQQaaPZKebw7NcxVthl7ReWmyTRJc6RABpoXqsMSjLEY8yA2WVqD7Mj-Ulnn_iVJX2H6WCkbDR7Lk8WcTtksPoU4jikI5BeoOIrROf6w-CeVs1RBbp8WqdbTkWunXFZr9znvRTE_Rj6R8"
            />
            <div>
              <p className="font-bold">Madonna Chioma</p>
              <p className="text-xs opacity-70">2024 Batch B, Delta State</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
