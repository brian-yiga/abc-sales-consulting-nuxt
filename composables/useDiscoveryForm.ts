import { ref } from "vue";

const discoveryFormRef = ref(null);

export const useDiscoveryForm = () => {
  const openForm = () => {
    discoveryFormRef.value?.open();
  };

  const closeForm = () => {
    discoveryFormRef.value?.close();
  };

  const setFormRef = (ref) => {
    discoveryFormRef.value = ref;
  };

  return {
    openForm,
    closeForm,
    setFormRef,
    discoveryFormRef,
  };
};
