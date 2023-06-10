import React from "react";
import { CustomButton } from ".";

type AIPickerProps = {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generatingImg: boolean;
  handleSubmit: (type: string) => Promise<void>;
};

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }: AIPickerProps) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask DALL-E..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton disabled={generatingImg} type="outline" title="Asking DALL-E..." customStyles="text-xs" />
        ) : (
          <>
            <CustomButton disabled={!prompt} type="outline" title="Logo" handleClick={() => handleSubmit("logo")} customStyles="text-xs" />

            <CustomButton disabled={!prompt} type="filled" title="Full" handleClick={() => handleSubmit("full")} customStyles="text-xs" />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
