import { getUser } from '@/services/HandlerGetUser';
import { updateUser } from '@/services/HandlerUpdateUser';
import { logoutUser } from '@/services/HandlerLogout';
import { deleteUser } from '@/services/HandlerDeleteUser';
import Client_ProfilePage from '@/components/client_ProfilePage.vue';

export default {
  name: 'Client_ProfilePage',
  components: {
    Client_ProfilePage
  },
  data() {
    return {
      user: {
        user_name: '',
        user_email: '',
        user_address: '',
        user_password: '',
      },
      userId: null,
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    };
  },
  mounted() {
    this.userId = localStorage.getItem('id');
    if (this.userId) {
      this.fetchUserData(this.userId);
    } else {
      console.error('No user ID found in local storage');
    }
  },
  methods: {
    async fetchUserData(id) {
      try {
        const userData = await getUser(id);
        this.user = {
          user_name: userData.user_name,
          user_email: userData.user_email,
          user_address: userData.user_address,
          user_password: '', // Do not display password
        };
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async updateProfile() {
      if (this.newPassword !== this.confirmNewPassword) {
        alert('New password and confirmation do not match.');
        return;
      }

      const updateData = {
        user_name: this.user.user_name,
        user_email: this.user.user_email,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
      };

      try {
        await updateUser(this.userId, updateData);
        alert('Profile updated successfully.');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
      }
    },
    async logout() {
      try {
        await logoutUser(this.userId);
        localStorage.clear();
        this.$router.push('/login');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    },
    async deleteAccount() {
      if (!this.oldPassword) {
        alert('Please enter your password to confirm account deletion.');
        return;
      }

      try {
        await deleteUser(this.userId, this.oldPassword);
        localStorage.clear();
        this.$router.push('/register');
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('Failed to delete account.');
      }
    }
  },
};
