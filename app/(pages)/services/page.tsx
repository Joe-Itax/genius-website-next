import "@/app/ui/styles/services.css";
import { servicesObject } from "@/app/ui/services/service";

export default function Services() {
  return (
    <>
      <main className="services-page">
        <div className="sub-main">
          <div className="hero bg-[url('/assets/images/our-service-page/bg-heading-our-service.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center px-4 py-24 text-center">
            <h1>Nos Services</h1>
            <p className="text-xl">
              Transformez votre marque avec nos solutions numériques innovantes
              qui captivent et engagent votre public.
            </p>
          </div>

          {servicesObject.map((service, i) => (
            <div className="main-container" key={`${service.mainTitle}-${i}`}>
              <div className="head pt-10">
                <h2>{service.mainTitle}</h2>
                <div>
                  <p className="description-of-service">
                    {service.description}
                  </p>
                </div>
                <div className="my-10 min-[500px]:w-max btn bg-[#262626]">
                  <span>{service.intro}</span>
                </div>
              </div>
              <div className="content flex">
                {service.subCategories?.map((subCategory, j) => (
                  <div className="block- block-1" key={j}>
                    <h3 className="title-service">{subCategory.title}</h3>
                    <div className="content-expanded">
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
