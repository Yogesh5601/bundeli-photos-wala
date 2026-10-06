"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GoldButton } from "@/components/site/editorial";
import { defaultEnquiryMessage, whatsAppUrl } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const schema = z.object({
  fullName: z.string().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  email: z.string().optional(),
  eventDate: z.string().min(1, "Required"),
  eventType: z.string().min(1, "Required"),
  time: z.string().min(1, "Required"),
  service: z.string().min(1, "Required"),
  people: z.string().optional(),
  venue: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v, "Required"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "rounded-none border-0 border-b border-[#bea98c] bg-transparent px-0 py-3 font-serif text-lg shadow-none focus-visible:border-gold focus-visible:ring-0";

export function BookingForm() {
  const [status, setStatus] = useState<{ text: string; error?: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false },
  });

  const consent = watch("consent");

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    setStatus(null);
    const lines = [
      "Hello Shital Gurav Makeup Studio,",
      "",
      "I would like to enquire/book an appointment.",
      "",
      `Name: ${data.fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Event Date: ${data.eventDate}`,
      `Event Type: ${data.eventType}`,
      `Preferred Time: ${data.time}`,
      `Makeup Service: ${data.service}`,
      `Number of People: ${data.people || "Not provided"}`,
      `Location: ${data.venue || "Not provided"}`,
      `Additional Requirements: ${data.message || "None"}`,
      "",
      "Please let me know the availability and further details.",
    ];
    setStatus({ text: "Your enquiry is ready. WhatsApp will open in a new tab." });
    window.open(whatsAppUrl(lines.join("\n")), "_blank", "noopener");
    setIsSubmitting(false);
  };

  const onInvalid = () => {
    setStatus({ text: "Please complete the required fields before continuing.", error: true });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="form-surface"
      noValidate
      aria-busy={isSubmitting}
    >
      <div className="col-span-full flex items-end justify-between border-b border-gold/35 pb-5 font-serif text-2xl">
        <span>Appointment request</span>
        <small className="text-[9px] tracking-[0.14em] text-[#88735c] uppercase">* Required fields</small>
      </div>

      <div className="space-y-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Full Name *</Label>
        <Input
          autoComplete="name"
          className={cn(fieldClass, errors.fullName && "border-destructive")}
          aria-invalid={!!errors.fullName}
          {...register("fullName")}
        />
        {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
      </div>
      <div className="space-y-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Phone Number *</Label>
        <Input
          type="tel"
          autoComplete="tel"
          className={cn(fieldClass, errors.phone && "border-destructive")}
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
      </div>
      <div className="space-y-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Email Address</Label>
        <Input type="email" autoComplete="email" className={fieldClass} {...register("email")} />
      </div>
      <div className="space-y-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Event Date *</Label>
        <Input
          type="date"
          className={cn(fieldClass, errors.eventDate && "border-destructive")}
          aria-invalid={!!errors.eventDate}
          {...register("eventDate")}
        />
        {errors.eventDate && <p className="text-sm text-destructive">{errors.eventDate.message}</p>}
      </div>
      <div className="space-y-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Event Type *</Label>
        <Select onValueChange={(v) => setValue("eventType", typeof v === "string" ? v : "", { shouldValidate: true })}>
          <SelectTrigger className={cn(fieldClass, "h-auto w-full", errors.eventType && "border-destructive")} aria-invalid={!!errors.eventType}>
            <SelectValue placeholder="Select event type" />
          </SelectTrigger>
          <SelectContent>
            {["Bridal", "Reception", "Engagement", "Party", "Traditional", "Pre-Bridal", "Other"].map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.eventType && <p className="text-sm text-destructive">{errors.eventType.message}</p>}
      </div>
      <div className="space-y-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Preferred Appointment Time *</Label>
        <Input
          type="time"
          className={cn(fieldClass, errors.time && "border-destructive")}
          aria-invalid={!!errors.time}
          {...register("time")}
        />
        {errors.time && <p className="text-sm text-destructive">{errors.time.message}</p>}
      </div>
      <div className="space-y-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Makeup Service *</Label>
        <Select onValueChange={(v) => setValue("service", typeof v === "string" ? v : "", { shouldValidate: true })}>
          <SelectTrigger className={cn(fieldClass, "h-auto w-full", errors.service && "border-destructive")} aria-invalid={!!errors.service}>
            <SelectValue placeholder="Select makeup service" />
          </SelectTrigger>
          <SelectContent>
            {[
              "3D Makeup",
              "HD Makeup",
              "Air Brush Makeup",
              "Party Makeup",
              "Reception Makeup",
              "Engagement Makeup",
              "Traditional Makeup",
              "Pre-Bridal",
              "Groom Makeup",
              "Other",
            ].map((o) => (
              <SelectItem key={o} value={o}>
                {o}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
      </div>
      <div className="space-y-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Number of People</Label>
        <Input type="number" min={1} inputMode="numeric" className={fieldClass} {...register("people")} />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Location / Venue</Label>
        <Input className={fieldClass} {...register("venue")} />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label className="text-[9px] tracking-[0.12em] text-[#675747] uppercase">Additional Requirements / Message</Label>
        <Textarea rows={5} className={cn(fieldClass, "min-h-[120px]")} {...register("message")} />
      </div>
      <div className="space-y-4 border border-gold/35 bg-gold2/10 p-5 md:col-span-2">
        <span className="text-[9px] tracking-[0.18em] text-gold uppercase">Before you send</span>
        <p className="font-serif text-base text-[#715f4d]">
          Your request will open as a pre-filled WhatsApp message. Availability will be confirmed directly by the studio.
        </p>
        <label className="flex items-center gap-2 text-sm text-[#675747]">
          <Checkbox checked={consent} onCheckedChange={(c) => setValue("consent", c === true, { shouldValidate: true })} />
          I confirm the details above are correct.
        </label>
        {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
      </div>
      <div className="flex flex-wrap gap-3 md:col-span-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-auto rounded-none bg-gold2 px-5 py-4 text-[9px] tracking-[0.18em] text-ink uppercase hover:bg-[#f4dca5] disabled:opacity-60"
        >
          {isSubmitting ? "Opening WhatsApp…" : "Request appointment ↗"}
        </Button>
        <GoldButton href={whatsAppUrl(defaultEnquiryMessage)} variant="outline">
          Enquire on WhatsApp ↗
        </GoldButton>
      </div>
      {status && (
        <p role="status" aria-live="polite" className={cn("font-serif md:col-span-2", status.error ? "text-destructive" : "text-[#6d8058]")}>
          {status.text}
        </p>
      )}
    </form>
  );
}
