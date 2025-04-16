"use client";
import { useEffect, useState } from "react";

type Location = {
  ip: string;
};
const useGeolocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    getLocation();
  }, []);
  async function getLocation() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_GEOLOCATION_URL}`);
    if (response.status === 200) {
      const data = await response.json();
      setLocation(data);
    }
  }
  return {
    ip: location?.ip,
  };
};

export default useGeolocation;
