"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/components/Loading";
import EventsPage from "@/components/EventsPage/EventsPage";

interface EventData {
  _id: string;
  eventName: string;
  subCategory: string;
  description: string;
  registrationFees: string;
  teamsize: string;
  rulebook: string;
  eventPoster: string;
  date: string;
  prizePool: string;
  coordinators: {
    name: string;
    number: string;
    _id: string;
  }[];
}

const Page = ({
  params,
}: {
  params: { eventID: string; eventCategory: string };
}) => {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://avenir24-backend.vercel.app/api/v1/events/${params.eventCategory}/${params.eventID}`
        );
        setEventData(response.data.event);
        setLoading(false);

        // Log eventData to console
        console.log("Event Data:", response.data.event);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function if needed
    // return () => {
    //   // Cleanup code
    // };
  }, [params.eventCategory, params.eventID]); // Dependency array including eventCategory and eventID

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <EventsPage eventData={eventData} />
        </div>
      )}
    </div>
  );
};

export default Page;
