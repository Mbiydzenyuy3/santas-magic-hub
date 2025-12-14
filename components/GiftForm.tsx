"use client";

import { useState } from "react";
import { GiftCategory } from "@/lib/giftCategories";

interface Props {
  onSubmit: (data: {
    age: number;
    relationship: string;
    personality: GiftCategory[];
  }) => void;
}

const relationshipOptions = [
  { value: "friend", label: "Friend" },
  { value: "partner", label: "Partner/Spouse" },
  { value: "other", label: "Other" }
];

const personalityOptions: {
  value: GiftCategory;
  label: string;
  description: string;
}[] = [
  {
    value: "Tech",
    label: " Tech Enthusiast",
    description: "Loves gadgets, electronics, and innovative products"
  },
  {
    value: "Cozy",
    label: " Cozy & Comfort",
    description: "Enjoys warm, comfortable, and relaxing items"
  },
  {
    value: "Fun",
    label: " Fun & Games",
    description: "Loves entertainment, games, and playful activities"
  },
  {
    value: "Food",
    label: " Foodie",
    description: "Appreciates gourmet food, snacks, and culinary experiences"
  },
  {
    value: "Fashion",
    label: " Fashion Forward",
    description: "Interested in clothing, accessories, and style"
  },
  {
    value: "Kids",
    label: "Kid-Friendly",
    description: "Toys, books, and activities for children"
  },
  {
    value: "Experience",
    label: " Experiences",
    description: "Values memories, events, and unique experiences"
  }
];

export default function GiftForm({ onSubmit }: Props) {
  const [age, setAge] = useState<number>(25);
  const [relationship, setRelationship] = useState<string>("friend");
  const [selectedPersonalities, setSelectedPersonalities] = useState<
    GiftCategory[]
  >(["Fun"]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePersonalityToggle = (personality: GiftCategory) => {
    setSelectedPersonalities((prev) =>
      prev.includes(personality)
        ? prev.filter((p) => p !== personality)
        : [...prev, personality]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedPersonalities.length === 0) {
      alert(
        "Please select at least one personality trait to get personalized gift recommendations!"
      );
      return;
    }

    setIsSubmitting(true);

    onSubmit({
      age,
      relationship,
      personality: selectedPersonalities
    });

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-lg mx-auto'>
      <div className='bg-white/90 backdrop-blur rounded-xl shadow-lg p-6 space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-red-700 mb-2'>
            Find the Perfect Gift 🎁
          </h2>
          <p className='text-gray-600 text-sm'>
            Tell us about the recipient and we&apos;ll suggest perfect gifts!
          </p>
        </div>

        {/* Age Field */}
        <div className='space-y-2'>
          <label
            htmlFor='age'
            className='block text-sm font-semibold text-gray-700'
          >
            Age
          </label>
          <input
            id='age'
            type='number'
            min='1'
            max='120'
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className='w-full p-3 border-2 border-gray-600 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-gray-700'
            required
          />
          <p className='text-xs text-gray-500'>
            Helps us recommend age-appropriate gifts
          </p>
        </div>

        <div className='space-y-2'>
          <label
            htmlFor='relationship'
            className='block text-sm font-semibold text-gray-700'
          >
            Relationship
          </label>
          <select
            id='relationship'
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className='w-full p-3 border-2 border-gray-600 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200 text-gray-700'
            required
          >
            {relationshipOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className='text-xs text-gray-500'>
            Different relationships call for different gift styles
          </p>
        </div>

        <fieldset className='space-y-3'>
          <legend className='block text-sm font-semibold text-gray-700'>
            Personality Traits
            <span className='text-red-500 ml-1'>*</span>
          </legend>
          <p className='text-xs text-gray-500 mb-3'>
            Select all that apply. Helps us personalize recommendations.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {personalityOptions.map((option) => (
              <label
                key={option.value}
                className={`relative flex items-start p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedPersonalities.includes(option.value)
                    ? "border-red-500 bg-red-50 ring-2 ring-red-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type='checkbox'
                  checked={selectedPersonalities.includes(option.value)}
                  onChange={() => handlePersonalityToggle(option.value)}
                  className='sr-only'
                  aria-describedby={`${option.value}-description`}
                />
                <div className='flex-1'>
                  <div className='font-medium text-sm text-gray-900'>
                    {option.label}
                  </div>
                  <div
                    id={`${option.value}-description`}
                    className='text-xs text-gray-600 mt-1'
                  >
                    {option.description}
                  </div>
                </div>
                <div
                  className={`ml-2 w-5 h-5 rounded border-2 flex items-center justify-center ${
                    selectedPersonalities.includes(option.value)
                      ? "border-red-500 bg-red-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedPersonalities.includes(option.value) && (
                    <svg
                      className='w-3 h-3 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  )}
                </div>
              </label>
            ))}
          </div>

          {selectedPersonalities.length === 0 && (
            <p className='text-sm text-red-600 bg-red-50 p-2 rounded border border-red-200'>
              Please select at least one personality trait
            </p>
          )}
        </fieldset>

        <button
          type='submit'
          disabled={isSubmitting || selectedPersonalities.length === 0}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center ${
            isSubmitting || selectedPersonalities.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5"
          }`}
        >
          {isSubmitting ? (
            <>
              <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
              Finding Perfect Gifts...
            </>
          ) : (
            <> Get Personalized Gift Ideas</>
          )}
        </button>

        {/* Helper Text */}
        <p className='text-xs text-center text-gray-500'>
          We&apos;ll use this information to suggest gifts that match their
          personality and your relationship
        </p>
      </div>
    </form>
  );
}
