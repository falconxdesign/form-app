<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" class="offset-sm-4">
          <v-card >
            <v-container class="text-center">
              <v-list-item-title
                class="headline text-center mb-3 font-weight-medium">
                CREATE ACCOUNT
              </v-list-item-title>

              <v-form v-model="valid">
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  prepend-icon="fa-user"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  prepend-icon="fa-envelope"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  prepend-icon="fa-unlock-alt"
                  label="Password"
                  type="password"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>

                <v-select
                  v-model="skills"
                  :items="skills"
                  :error-messages="selectErrors"
                  prepend-icon="fa-briefcase "
                  label="Skills"
                  required
                  @change="$v.skills.$touch()"
                  @blur="$v.skills.$touch()"
                ></v-select>

                <v-select
                  v-model="gender"
                  :items="sex"
                  :error-messages="genderErrors"
                  prepend-icon="fa-venus-mars"
                  label="Gender"
                  required
                  @change="$v.gender.$touch()"
                  @blur="$v.gender.$touch()"
                ></v-select>

                <v-select
                  v-model="country"
                  :items="country"
                  :error-messages="countryErrors"
                  prepend-icon="fa fa-globe"
                  label="Country"
                  required
                  @change="$v.country.$touch()"
                  @blur="$v.country.$touch()"
                ></v-select>

                <v-btn
                  :disabled="!valid"
                  color="primary"
                  class="mr-4"
                  @click="validate"
                >
                  register
                </v-btn>

              </v-form>
              
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'


export default {
  name: 'Home',
  mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(40) },
      email: { required, email },
      password: { required, minLength },
      select: { required }
      },
  components: {
    
  },
  data: () => ({
    name: '',
    email: '',
    password:  '',
    select: null,
      skills: [
        'Web Designer',
        'Illustrator',
        'Painter',
        'Photographer',
      ],
      sex: [
        'Male',
        'Female'
      ],
      country: [
        'Ghana',
        'Nigeria',
        'Mali',
        'Togo',
      ]
  }),
  computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 40 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      // checkboxErrors () {
      //   const errors = []
      //   if (!this.$v.checkbox.$dirty) return errors
      //   !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      //   return errors
      // },
      // selectErrors () {
      //   const errors = []
      //   if (!this.$v.select.$dirty) return errors
      //   !this.$v.select.required && errors.push('Item is required')
      //   return errors
      // },
      
      // emailErrors () {
      //   const errors = []
      //   if (!this.$v.email.$dirty) return errors
      //   !this.$v.email.email && errors.push('Must be valid e-mail')
      //   !this.$v.email.required && errors.push('E-mail is required')
      //   return errors
      // },
    },
    methods: {
      submit () {
        this.$v.$touch()
      }    
    },
  }
</script>

<style scoped>
  /* #cardheader{
    background-color: blue;
    margin: 0 auto;
    padding: 1rem;
  } */
</style>
