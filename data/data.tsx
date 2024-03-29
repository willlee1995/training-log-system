import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { Brain, Heart, Syringe } from "lucide-react";

export const labels = [
  {
    value: "A",
    label: "Tier A",
  },
  {
    value: "B",
    label: "Tier B",
  },
];
export const categories = [
  {
    value: "Neurointervention",
    label: "Neurointerventional procedures",
    icon: Brain,
  },
  {
    value: "Arterial",
    label: "Arterial interventional procedures",
    icon: Heart,
  },
  {
    value: "Venous",
    label: "Venous and dialysis access interventions",
    icon: Heart,
  },
  {
    value: "Hepatobiliary",
    label: "Hepatobiliary interventions",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "Thoracic",
    label: "Thoracic interventions",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "Urogenital",
    label: "Urogenital interventions",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "Musculoskeletal",
    label: "Musculoskeletal interventions",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "paediatric",
    label: "Paediatric interventions",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "Oncology",
    label: "Interventional Oncology",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "VA",
    label: "Vascular anomalies",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "MR",
    label: "MR guided interventions",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "NVIR",
    label: "Non-Vascular",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "IR",
    label: "Vascular",
    icon: Syringe,
  },
  {
    value: "gi",
    label: "Gastro-intestinal procedures",
    icon: Syringe,
  },
];
export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];
