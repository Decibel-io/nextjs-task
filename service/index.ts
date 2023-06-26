import axios from "axios";
import { getSession } from "next-auth/react";
import { get, post, put } from "./axios";
async function getSessionData() {
  const session: any = await getSession();
  return session?.user?.access_token
}

export const getNodes = async (offset:number) => {
  const token = await getSessionData()

  return get(`/calls?offset=${offset}&limit=10`,
    {
      headers: {
        "Authorization": "Bearer " + token
      }
    }
  );
};

export const archiveNode = async (id:string) => {
  const token = await getSessionData()
  return put(`/calls/${id}/archive`, {},
    {
      headers: {
        "Authorization": "Bearer " + token
      }
    }
  );
};

export const newNote = async (id: string, content: string) => {
  const token = await getSessionData()
  return post(`/calls/${id}/note`,
    {
      content
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};