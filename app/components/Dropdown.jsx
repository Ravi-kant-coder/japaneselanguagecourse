"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, UserCheck } from "lucide-react";

export default function GuideDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-4 py-2 font-medium text-gray-700 hover:text-black transition cursor-pointer">
        Guide
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute -right-10 w-72 bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="p-2 space-y-2">
              <a
                href="/guide/candidate"
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-200 transition"
              >
                <BookOpen className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="font-semibold text-sm text-blue-600">
                    Candidate Guide
                  </p>
                  <p className="text-xs text-gray-800">
                    How to showcase your language & tech skills
                  </p>
                </div>
              </a>

              <a
                href="/guide/recruiter"
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-200 transition"
              >
                <UserCheck className="w-5 h-5 mt-1 text-green-500" />
                <div>
                  <p className="font-semibold text-sm text-green-600">
                    Recruiter Guide
                  </p>
                  <p className="text-xs text-gray-800">
                    What to ask to evaluate candidates effectively
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
