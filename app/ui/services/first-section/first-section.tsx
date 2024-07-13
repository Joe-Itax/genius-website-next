import { servicesObject } from "@/app/ui/services/service";

export default function FirstSection() {
  return (
    <section className="first">
      <div className="hero bg-[url('/assets/images/our-service-page/bg-heading-our-service.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center px-4 py-24 text-center">
        <h1>Nos Services</h1>
        <p className="text-xl">
          Transformez votre marque avec nos solutions numériques innovantes qui
          captivent et engagent votre public.
        </p>
      </div>

      {servicesObject.map((service, i) => (
        <div className="main-container" key={`${service.mainTitle}-${i}`}>
          <div className="head pt-10 px-10 max-[450px]:px-4">
            <h2>{service.mainTitle}</h2>
            <div>
              <p className="description-of-service">{service.description}</p>
            </div>
            <div className="my-10 min-[500px]:w-max btn bg-[#262626]">
              <span>{service.intro}</span>
            </div>
          </div>
          <div className="">
            <div className="content flex">
              {service.subCategories?.map((subCategory, j) => (
                <div className="block-" key={j}>
                  <h3 className="title-service">{subCategory.title}</h3>
                  <div className="content-expanded border-y">
                    <div className="flex flex-col w-full md:flex-row px-10 max-[450px]:px-4">
                      {subCategory.items.map((item, k) => (
                        <div className="content-expanded-content" key={k}>
                          <div className="icon-box">{item.icon}</div>
                          <div>
                            <p>
                              {item.title} {item?.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
