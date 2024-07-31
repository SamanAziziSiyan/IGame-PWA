import { BeatLoader, BounceLoader, DotLoader } from "react-spinners";

export const ContentLoading = () => {
    return (
        <div className="h-[50vh] min-h-[50vh] w-full mx-auto flex flex-col gap-y-4 items-center justify-center py-6">
            <BounceLoader color="white" />
            در حال بارگزاری
        </div>
    );
}