import React from "react";
import { useSelector } from "react-redux";

const Card = ({ person }) => {
  const { currentLanguage } = useSelector((state) => state.navBar);

  if (!person || !person.english || !person.japanese) {
    return null; // Prevent rendering if data is missing
  }

  return (
    <div className="card">
      <div className="saying">
        <p>
          {currentLanguage === "en"
            ? person?.english?.saying || "No testimonial available."
            : person?.japanese?.saying || "レビューは利用できません。"}
        </p>
      </div>

      <div className="info">
        <p className="">
          <b className="ht_text">
            {currentLanguage === "en"
              ? person?.english?.name || "Unknown"
              : person?.japanese?.name || "不明"}
          </b>{" "}
          |{" "}
          <span className="person_desc">
            {currentLanguage === "en"
              ? person?.english?.position || "No position specified"
              : person?.japanese?.position || "役職が指定されていません"} {" "}
            {person?.english?.company && (
              <>
                at{" "}
                <a
                  href={person?.english?.website || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>
                    {currentLanguage === "en"
                      ? person?.english?.company || "Company Unknown"
                      : person?.japanese?.company || "会社不明"}
                  </b>
                </a>
              </>
            )}
            , {" "}
            {currentLanguage === "en"
              ? person?.english?.country || "Country Unknown"
              : person?.japanese?.country || "国不明"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;