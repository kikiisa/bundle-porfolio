<template>
  <div class="row justify-content-center">
      <div class="col-md-6 col-lg-6 col-sm-12 col-12">
        <form @submit.prevent="sending">
        <textarea v-model="message" type="text" class="form-control form-input" placeholder="Kirimkan pesan anonim padaku" cols="30" rows="10"></textarea>
        <button class="w-100 mt-3 btn btn-primary color-2">Kirim !</button>
        </form>
      </div>
      <h4 class="text-center py-4">Pesan Dari Hatters / Fans Dan Lainya</h4>
      <div class="row justify-content-center mb-4">
          <div class="col-md-6 col-lg-6 col-12 mt-2">
              <div class="row">
                <div class="col-md-12 col-lg-12 col-12 mt-2" v-for="data in datas" :key="data.id">
                    <div :class="'card border-0'">
                        <div class="card-body">
                            <div class="card-text text-muted">@Anonymous</div>
                            <div class="content mt-2 mb-2">
                                <strong>{{ data.pesan }}</strong>
                            </div>
                            <hr>
                            <div class="date text-muted">
                                {{data.tgl}}
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'
import { createToast } from 'mosha-vue-toastify';
import { onMounted } from '@vue/runtime-core';
export default {
    setup() {
        const message = ref("");
        const datas = ref([])
        const getData = async () => 
        {
            await axios.get("https://gemasuararakyat/service_nglink.php")
            .then((response) => {
                datas.value = response.data.data
            })
            .catch((error) => {
                console.log(error)
            })
        }
        const sending = async () => 
        {
            if(message.value.length > 0)
            {
                const formData = new FormData();
                formData.append("pesan",message.value)
                await axios.post("https://gemasuararakyat/service_nglink.php",formData)
                .then((respondes) => {
                    message.value = ""
                    createToast('Terimah Kasih Kaka Telah Mengkritik Saya')   
                    console.log(respondes)
                    getData()
                })
                .catch((error) => {
                    console.log(error)
                })
            }else{
                createToast("Woy Harus Isi Anjerr")
            }
        }

        onMounted(() => {
            getData()
        })
        return { message,sending,datas}
    },
}
</script>
<style scoped>
.form {
  position: relative;
}



.form span {
  position: absolute;
  right: 17px;
  top: 13px;
  padding: 2px;
  border-left: 1px solid #d1d5db;
}

.left-pan {
  padding-left: 7px;
}

.left-pan i {
  padding-left: 10px;
}

.form-input {
  height: 100px;
  border-radius: 10px;
}

.form-input:focus {
  box-shadow: none;
  border: none;
}
</style>
