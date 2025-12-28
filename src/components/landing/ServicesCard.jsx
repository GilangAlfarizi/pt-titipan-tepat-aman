import { useState } from "react";

const ServicesCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  button,
  cardDetail,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="bg-neutral-primary-soft w-full flex flex-col border border-default rounded-base shadow-xs overflow-hidden">

        {/* IMAGE */}
        <img
          className="w-full h-32 sm:h-36 object-cover"
          src={imgSrc}
          alt={imgAlt}
        />

        {/* CONTENT */}
        <div className="p-4 text-center flex-1 flex flex-col">

          {/* BADGE */}
          <span className="mx-auto inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-2 py-1 rounded-sm">
            {title}
          </span>

          {/* DESCRIPTION */}
          <h5 className="mt-3 mb-4 text-sm sm:text-base text-heading line-clamp-3">
            {description}
          </h5>

          {/* BUTTON */}
          <div className="mt-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto mx-auto inline-flex justify-center items-center text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-sm px-4 py-2 focus:outline-none"
              type="button"
            >
              {button}
            </button>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-2xl">
            <div className="bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 sm:p-6">

              <p className="text-sm sm:text-base leading-relaxed text-body mb-6">
                {cardDetail}
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-sm px-6 py-2"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesCard;
