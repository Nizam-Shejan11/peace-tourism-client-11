import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="py-12">
        <h2 className="text-4xl text-center font-semibold">OUR PACKAGES</h2>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words <br /> which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <ServiceCard key={service?._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
