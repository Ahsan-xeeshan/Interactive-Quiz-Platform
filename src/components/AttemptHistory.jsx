import React, { useEffect, useState } from "react";
import { getAttempts } from "../../db/IndexedDB";

const AttemptHistory = ({ localAttempts }) => {
  const [dbAttempts, setDbAttempts] = useState([]);

  useEffect(() => {
    // Load stored attempts from IndexedDB on mount
    getAttempts().then(setDbAttempts).catch(console.error);
  }, [localAttempts]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg mt-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">Your Last Attempts</h3>
      </div>
      {localAttempts.length === 0 && dbAttempts.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">No attempts yet.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-x-5">
            {[...dbAttempts]
              .map((attempt, index) => (
                <p key={`db-${attempt.id || `db-${index}`}`}>
                  <strong>Saved Attempt {index + 1}</strong>: {attempt.score} /{" "}
                  {attempt.total}
                </p>
              ))
              .reverse()
              .slice(0, 20)}
          </div>
          <div className="text-center mt-2">
            {localAttempts.length < 5 ? (
              <p className="text-xl font-bold capitalize">
                Now attempt no. {localAttempts.length + 1}
              </p>
            ) : (
              <p className="text-xl text-red-400 font-bold">
                No Attempt Left!!!
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AttemptHistory;
