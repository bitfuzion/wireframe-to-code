"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { account } from "@/configs/appwriteConfig"; // your Appwrite client
import { ID, Models } from "appwrite";

function ProfileAvatar() {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
  const router = useRouter();

  useEffect(() => {
  const getUser = async () => {
    try {
      const session = await account.getSession('current');
      if (session) {
        const currentUser = await account.get();
        setUser(currentUser);
      }
    } catch (error) {
      console.error("User not logged in", error);
    }
  };

  getUser();
}, []);


  const onLogout = async () => {
    try {
      await account.deleteSession("current");
      router.replace("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const avatarUrl = user
    ? `https://ui-avatars.com/api/?name=${user.name}&background=random`
    : "";

  return (
    <div>
      {user && (
        <Popover>
          <PopoverTrigger>
            <img
              src={avatarUrl}
              alt="profile"
              className="w-[35px] h-[35px] rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className="w-[100px] mx-w-sm">
            <Button variant={"ghost"} onClick={onLogout}>
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

export default ProfileAvatar;
