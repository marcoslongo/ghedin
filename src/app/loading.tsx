import { Skeleton } from "../components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <div className="bg-[#483B35] h-32" />

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#9A8167]/10">
              <Skeleton className="h-14 w-full rounded-none" />
              <div className="p-5 space-y-5">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <div className="grid grid-cols-3 gap-1.5">
                    <Skeleton className="h-9 rounded-lg" />
                    <Skeleton className="h-9 rounded-lg" />
                    <Skeleton className="h-9 rounded-lg" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-10 w-full rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-10 w-full rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <div className="grid grid-cols-4 gap-1.5">
                    <Skeleton className="h-9 rounded-lg" />
                    <Skeleton className="h-9 rounded-lg" />
                    <Skeleton className="h-9 rounded-lg" />
                    <Skeleton className="h-9 rounded-lg" />
                  </div>
                </div>
                <Skeleton className="h-11 w-full rounded-xl" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-[#9A8167]/10"
                >
                  <Skeleton className="aspect-[4/3] w-full rounded-none" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-3.5 w-1/2" />
                    <div className="flex gap-3 pt-2 border-t border-[#F0EAE2]">
                      <Skeleton className="h-4 w-10" />
                      <Skeleton className="h-4 w-10" />
                      <Skeleton className="h-4 w-14" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
