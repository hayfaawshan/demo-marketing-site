import React, { useState } from "react";

export default function NewThread() {
  // Placeholder for settings state
  const [settings, setSettings] = useState({
    exampleSetting: "",
  });

  const handleStart = () => {
    // Placeholder for starting logic
    alert("Let's start! (settings will be handled here)");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          New Assistant Thread, <span className="font-mono text-blue-600">hldad</span>
        </h1>
        <p className="text-gray-700 mb-6">
          Before we start, please specify the settings to start this task with.
        </p>
        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault();
            handleStart();
          }}
        >
          {/* Example interactive setting field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="exampleSetting">
              Example Setting
            </label>
            <input
              id="exampleSetting"
              type="text"
              value={settings.exampleSetting}
              onChange={e => setSettings({ ...settings, exampleSetting: e.target.value })}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter a value"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Let's start!
          </button>
        </form>
      </div>
    </div>
  );
}