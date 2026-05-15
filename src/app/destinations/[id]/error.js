"use client";

import { Button } from "@heroui/react";
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-50 p-5 rounded-full">
            <AlertTriangle size={48} className="text-red-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold text-[#0C0B0B] mb-3">
          Something went wrong
        </h1>
        <p className="text-[#6C696D] text-lg mb-2">
          An unexpected error occurred while loading this page.
        </p>

        {/* Error message (dev helper) */}
        {error?.message && (
          <p className="text-sm text-red-400 bg-red-50 px-4 py-2 rounded mb-8 font-mono break-all">
            {error.message}
          </p>
        )}

        {/* Actions */}
        <div className="flex justify-center gap-3 mt-6">
          <Button
            variant="outline"
            className="rounded-none"
            onPress={reset}
          >
            <RefreshCw size={15} />
            Try Again
          </Button>

          <Link href="/">
            <Button className="rounded-none bg-[#15A1BF]">
              <ArrowLeft size={15} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;