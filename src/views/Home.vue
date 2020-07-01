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

              <v-form>
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
                  v-model="skill"
                  :items="skills"
                  :error-messages="skillsErrors"
                  prepend-icon="fa-briefcase"
                  label="Skills"
                  required
                  @change="$v.skill.$touch()"
                  @blur="$v.skill.$touch()"
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
                  :items="nation"
                  :error-messages="countryErrors"
                  prepend-icon="fa fa-globe"
                  label="Country"
                  required
                  @change="$v.country.$touch()"
                  @blur="$v.country.$touch()"
                ></v-select>

                <v-btn
                  color="primary"
                  class="mr-4"
                  @click="register"
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
import { hasNumber, hasCapitalLetter, hasSmallLetter } from '../assets/passwordvalidation'


export default {
  name: 'Home',
  mixins: [validationMixin],

  data: () => ({
    name: '',
    email: '',
    password: '',
    skill: null,
    gender: null,
    country: null,
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
      nation: [
        'Ghana',
        'Nigeria',
        'Mali',
        'Togo',
      ]
  }),
   validations: {
      name: { required, maxLength: maxLength(15) },
      email: { required, email },
      password: { required, minLength: minLength(8), hasNumber, hasCapitalLetter, hasSmallLetter },
      skill: { required },
      gender: { required },
      country: { required }
      },
  components: {
    
  },
  computed: {
      nameErrors () {
        const errors = [];
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 15 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = [];
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      passwordErrors () {
        const errors = [];
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Password must be at least 8 characters long')
        !this.$v.password.hasNumber && errors.push('Password must contain a number')
        !this.$v.password.hasSmallLetter && errors.push('Password must contain a lowercase letter')
        !this.$v.password.hasCapitalLetter && errors.push('Password must contain a uppercase letter')
        !this.$v.password.required && errors.push('Password is required')
        return errors
      },
      skillsErrors () {
        const errors = []
        if (!this.$v.skill.$dirty) return errors
        !this.$v.skill.required && errors.push('Skill is required')
        return errors
      },
      genderErrors () {
        const errors = []
        if (!this.$v.gender.$dirty) return errors
        !this.$v.gender.required && errors.push('Gender is required')
        return errors
      },
      countryErrors () {
        const errors = []
        if (!this.$v.country.$dirty) return errors
        !this.$v.country.required && errors.push('Country is required')
        return errors
      },      
    },
    methods: {
      register() {
        this.$v.$touch()

        if(!this.$v.$dirty){
          console.log("good")
        }else{
          console.log("not good")
        }
      }    
    },
  }
</script>

<style scoped>
  
</style>
