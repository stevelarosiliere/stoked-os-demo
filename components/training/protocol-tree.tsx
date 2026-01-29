"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, RotateCcw } from "lucide-react";
import type { ProtocolTree, ProtocolOptionType } from "@/lib/data/training";

const optionColors: Record<ProtocolOptionType, string> = {
  positive: "bg-green-50 text-green-700 hover:bg-green-100 border-green-200",
  neutral: "bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200",
  escalate: "bg-red-50 text-red-700 hover:bg-red-100 border-red-200",
};

const optionDotColors: Record<ProtocolOptionType, string> = {
  positive: "bg-green-500",
  neutral: "bg-amber-500",
  escalate: "bg-red-500",
};

export function ProtocolTreeView({ protocol }: { protocol: ProtocolTree }) {
  const [currentStepId, setCurrentStepId] = useState(protocol.startStepId);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  const currentStep = protocol.steps.find((s) => s.id === currentStepId);

  const handleOptionClick = (nextStepId: string) => {
    setBreadcrumbs((prev) => [...prev, currentStepId]);
    setCurrentStepId(nextStepId);
  };

  const handleReset = () => {
    setCurrentStepId(protocol.startStepId);
    setBreadcrumbs([]);
  };

  const handleBreadcrumbClick = (stepId: string, index: number) => {
    setCurrentStepId(stepId);
    setBreadcrumbs((prev) => prev.slice(0, index));
  };

  if (!currentStep) return null;

  const isEndState = currentStep.options.length === 0;

  return (
    <div className="space-y-4">
      {/* Breadcrumb trail */}
      {breadcrumbs.length > 0 && (
        <div className="flex items-center gap-1 flex-wrap text-sm">
          {breadcrumbs.map((stepId, idx) => {
            const step = protocol.steps.find((s) => s.id === stepId);
            return (
              <span key={stepId} className="flex items-center gap-1">
                <button
                  onClick={() => handleBreadcrumbClick(stepId, idx)}
                  className="text-slate-400 hover:text-[#1AB394] transition-colors"
                >
                  {step?.title}
                </button>
                <ChevronRight className="h-3 w-3 text-slate-300" />
              </span>
            );
          })}
          <span className="font-medium text-slate-700">{currentStep.title}</span>
        </div>
      )}

      {/* Current step card */}
      <Card
        className={`p-6 rounded-xl shadow-sm border bg-white ${
          isEndState ? "border-l-4 border-l-[#1AB394]" : ""
        }`}
      >
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-heading font-bold text-slate-900">
                {currentStep.title}
              </h3>
              {isEndState && (
                <Badge className="bg-[#E8F8F4] text-[#1AB394] border-0 text-xs">
                  End State
                </Badge>
              )}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {currentStep.description}
            </p>
          </div>

          {/* Option buttons */}
          {currentStep.options.length > 0 && (
            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                Choose your response
              </p>
              {currentStep.options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleOptionClick(option.nextStepId)}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors flex items-center gap-3 ${optionColors[option.type]}`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${optionDotColors[option.type]}`}
                  />
                  {option.label}
                </button>
              ))}
            </div>
          )}

          {/* Reset button */}
          {(isEndState || breadcrumbs.length > 0) && (
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="text-slate-500 hover:text-slate-700"
              >
                <RotateCcw className="h-3.5 w-3.5 mr-1.5" />
                Start Over
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
