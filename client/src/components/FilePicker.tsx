import { CustomButton } from ".";

type FilePickerProps = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  readFile: (type: string) => void;
};

const FilePicker = ({ file, setFile, readFile }: FilePickerProps) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) setFile(e.target.files[0]);
          }}
        />

        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">{file?.name || "No file selected"}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton disabled={!file} type="outline" title="Logo" handleClick={() => readFile("logo")} customStyles="text-xs" />
        <CustomButton disabled={!file} type="filled" title="Full" handleClick={() => readFile("full")} customStyles="text-xs" />
      </div>
    </div>
  );
};

export default FilePicker;
