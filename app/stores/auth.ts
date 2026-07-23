import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore",
  // The old way of writing stores
  // To be consistent with other vue parts of the app, we refactor to Vue's composition api
  // I am actually not sure which one I prefer personally
  // Note: This one should be an object attribute but the composition api way uses a callback function instead
  // {
  //   state: () => ({
  //     loading: false,
  //   }),
  //   actions: {
  //     async signIn() {
  //       this.loading = true;
  //       await authClient.signIn.social({
  //         provider: "github",
  //         callbackURL: "/dashboard",
  //       });
  //       this.loading = false;
  //     },
  //   },
  // }
  () => {
    const loading = ref(false);
    async function signIn() {
      loading.value = true;
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
        errorCallbackURL: "/error",
      });
      loading.value = false;
    }

    // Return types are inferred this way while with the old way there might be some extra work there
    return {
      loading,
      signIn,
    };
  });
