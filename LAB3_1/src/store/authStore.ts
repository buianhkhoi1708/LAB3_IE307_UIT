import { create } from "zustand";

type User = { email: string } | null;

type LoginResult = { ok: true } | { ok: false; msg?: string };

type AuthState = {
  user: User;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => Promise<void>;
};

const my_email = "23520759@gm.uit.edu.vn";
const my_password = "buianhkhoi";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: async (email, password) => {
    if (email !== my_email)
        return {ok: false, msg: "Incorrect email or password"}
    if (password !== my_password)
      return { ok: false, msg: "Incorrect email or password" };
    set({ user: { email } });
    return { ok: true };
  },

  logout: async () => {
    set({ user: null });
  },
}));
