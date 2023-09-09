"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const eventsList: Event[] = [
  {
    title: "Fis Week Painel 1",
    start: new Date(2023, 8, 10, 10, 0),
    end: new Date(2023, 8, 10, 11, 30),
    resource: {
      id: 1,
      description: "Semana de Fisioterapia",
    },
  },

  {
    title: "Web Painel 2",
    start: new Date(2023, 8, 11, 9, 0),
    end: new Date(2023, 8, 11, 9, 30),
    resource: {
      id: 2,
      description: "Semana de Psicologia",
    },
  },
  {
    title: "Web Painel 3",
    start: new Date(2023, 8, 12, 12, 0),
    end: new Date(2023, 8, 12, 13, 0),
    resource: {
      id: 3,
      description: "Semana de Anciologia",
    },
  },
];

const CustomCalendar = () => {
  const [events, setEvents] = useState(eventsList);
  const [selectedEvent, setSelectedEvent] = useState<null | Event>(null);

  return (
    <div className="flex">
      <div className="h-screen w-full max-w-7xl">
        <Calendar
          culture="pt-BR"
          localizer={localizer}
          events={events}
          selectable
          onSelectEvent={(event) => setSelectedEvent(event)}
        />
      </div>
      <div>{JSON.stringify(selectedEvent)}</div>
    </div>
  );
};

CustomCalendar.displayName = "CustomCalendar";

export { CustomCalendar };
