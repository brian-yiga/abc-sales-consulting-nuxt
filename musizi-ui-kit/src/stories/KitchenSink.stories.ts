import type { Meta, StoryObj } from '@storybook/vue3'

// Core
import { MuiButton } from '@components/button'
import { MuiIcon } from '@components/icon'
import { MuiPattern } from '@components/pattern'
import { MuiSocialMedia } from '@components/social-media'
import {
  MuiLogoBusiness,
  MuiLogoFoundation,
  MuiLogoHealth,
  MuiLogoMu,
  MuiLogoUniversity,
  MuiLogoWings,
} from '@components/logo'

// Layout
import MuiHeader from '@components/header/MuiHeader.vue'
import HeaderMenu from '@components/header/HeaderMenu.vue'
import MuiHeaderBlurBg from '@components/header-blur-bg/MuiHeaderBlurBg.vue'
import { MuiPageContainer } from '@components/page-container'
import { MuiFooterContacts } from '@components/footer'
import { MuiFooterCredits } from '@components/footer'

// Banners
import MuiBannerInsetCard from '@components/banner/MuiBannerInsetCard.vue'
import MuiBannerWithSlash from '@components/banner/MuiBannerWithSlash.vue'
import MuiBannerWithBleeding from '@components/banner/MuiBannerWithBleeding.vue'
import MuiBannerVideoModal from '@components/banner/MuiBannerVideoModal.vue'
import MuiBlurredBackgroundBanner from '@components/banner/MuiBlurredBackgroundBanner.vue'
import MuiBlurredTitleOnlyBanner from '@components/banner/MuiBlurredTitleOnlyBanner.vue'
import MuiPageBannerText from '@components/banner/MuiPageBannerText.vue'
import MuiTopStripBanner from '@components/banner/MuiTopStripBanner.vue'

// Cards & Content
import MuiTextAndButtonCard from '@/components/CallToActionCards/MuiTextAndButtonCard.vue'
import MuiTextDateButtonCard from '@/components/CallToActionCards/MuiTextDateButtonCard.vue'
import MuiTitleAndButtonCard from '@/components/CallToActionCards/MuiTitleAndButtonCard.vue'
import MuiBannerTitleWithButtons from '@/components/CallToActionCards/MuiBannerTitleWithButtons.vue'
import MuiTitleButtonsWithInsetCard from '@/components/CallToActionCards/MuiTitleButtonsWithInsetCard.vue'
import MuiProfileCard from '@/components/textWithImage/MuiProfileCard.vue'
import MuiNumberedCard from '@/components/textWithImage/MuiNumberedCard.vue'
import MuiTextWithImage from '@/components/textWithImage/MuiTextWithImage.vue'
import MuiBlockQuoteYear from '@/components/textContent/MuiBlockQuoteYear.vue'
import MuiNumberedDigitCard from '@/components/textContent/MuiNumberedDigitCard.vue'
import MuiLogoButtonCard from '@/components/logoButtonCard/MuiLogoButtonCard.vue'
import { MuiTextBlock } from '@components/text-block'

// Carousel
import MuiCarousel from '@/components/carousel/MuiCarousel.vue'
import MuiCarouselItem from '@/components/carousel/MuiCarouselItem.vue'

// Newsletter
import { MuiNewsletterButtonLink } from '@components/newsletter'

const meta: Meta = {
  title: 'Kitchen Sink',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
}

export default meta

type Story = StoryObj

const sectionStyle =
  'padding: 3rem 1.5rem; border-bottom: 1px solid #e5e7eb;'
const sectionHeadingStyle =
  'font-family: Poppins, sans-serif; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #C10230; margin-bottom: 0.5rem;'
const sectionTitleStyle =
  'font-family: Poppins, sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem; color: #1a1a1a;'

const menuItems = [
  { text: 'Home', url: '/' },
  { text: 'Academics', url: '/academics' },
  { text: 'Admissions', url: '/admissions' },
  {
    text: 'Priorities',
    url: '/priorities',
    childrenItems: [
      { text: 'Priority One', url: '/priorities/one' },
      { text: 'Priority Two', url: '/priorities/two' },
    ],
  },
  { text: 'Contact', url: '/contact' },
]

const bannerImage = {
  small: '/img/banners/banner-sm.jpg',
  medium: '/img/banners/banner-lg.jpg',
  large: '/img/banners/banner-lg.jpg',
  alt: 'Banner background',
}

const bannerImage2 = {
  small: '/img/banners/cybersecurity-sm.jpg',
  large: '/img/banners/cybersecurity-lg.jpg',
  alt: 'Cybersecurity program banner',
}

const bannerImage3 = {
  small: '/img/banners/list-banner-small.jpg',
  medium: '/img/banners/list-banner-medium.jpg',
  large: '/img/banners/list-banner.jpg',
  alt: 'List banner background',
}

const bannerImage4 = {
  small: '/img/banners/staff-page-header-bg-small.jpg',
  medium: '/img/banners/staff-page-header-bg-medium.jpg',
  large: '/img/banners/staff-page-header-bg-large.jpg',
  alt: 'Staff page header background',
}

const bannerImage5 = {
  small: '/img/banners/donate-small.jpg',
  medium: '/img/banners/donate-medium.jpg',
  large: '/img/banners/donate-large.jpg',
  alt: 'Donate banner',
}

const bannerImage6 = {
  small: '/img/banners/header-leadership-small.jpg',
  medium: '/img/banners/header-leadership-medium.jpg',
  large: '/img/banners/header-leadership-large.jpg',
  alt: 'Our Leadership at Musizi University',
}

const videoThumbnail = {
  small: '/img/banners/family-enterprises-video-sm.png',
  large: '/img/banners/family-enterprises-video-lg.png',
  alt: 'Play video',
}

const sampleImage = {
  small: 'https://placehold.co/400x300',
  large: 'https://placehold.co/800x600',
}

const carouselSlides = [
  {
    src: 'https://placehold.co/1200x600/C10230/FFFFFF?text=Slide+1',
    alt: 'Slide 1',
  },
  {
    src: 'https://placehold.co/1200x600/75308C/FFFFFF?text=Slide+2',
    alt: 'Slide 2',
  },
  {
    src: 'https://placehold.co/1200x600/54565A/FFFFFF?text=Slide+3',
    alt: 'Slide 3',
  },
]

export const AllComponents: Story = {
  render: () => ({
    components: {
      // Core
      MuiButton,
      MuiIcon,
      MuiPattern,
      MuiSocialMedia,
      MuiLogoBusiness,
      MuiLogoFoundation,
      MuiLogoHealth,
      MuiLogoMu,
      MuiLogoUniversity,
      MuiLogoWings,
      // Layout
      MuiHeader,
      HeaderMenu,
      MuiHeaderBlurBg,
      MuiPageContainer,
      MuiFooterContacts,
      MuiFooterCredits,
      // Banners
      MuiBannerInsetCard,
      MuiBannerWithSlash,
      MuiBannerWithBleeding,
      MuiBannerVideoModal,
      MuiBlurredBackgroundBanner,
      MuiBlurredTitleOnlyBanner,
      MuiPageBannerText,
      MuiTopStripBanner,
      // Cards & Content
      MuiTextAndButtonCard,
      MuiTextDateButtonCard,
      MuiTitleAndButtonCard,
      MuiBannerTitleWithButtons,
      MuiTitleButtonsWithInsetCard,
      MuiProfileCard,
      MuiNumberedCard,
      MuiTextWithImage,
      MuiBlockQuoteYear,
      MuiNumberedDigitCard,
      MuiLogoButtonCard,
      MuiTextBlock,
      // Carousel
      MuiCarousel,
      MuiCarouselItem,
      // Newsletter
      MuiNewsletterButtonLink,
    },
    setup() {
      const onActionClick = () => {}
      const onPlay = () => alert('Video play clicked!')
      return {
        sectionStyle,
        sectionHeadingStyle,
        sectionTitleStyle,
        menuItems,
        bannerImage,
        bannerImage2,
        bannerImage3,
        bannerImage4,
        bannerImage5,
        bannerImage6,
        videoThumbnail,
        sampleImage,
        carouselSlides,
        onActionClick,
        onPlay,
      }
    },
    template: `
      <div>
        <!-- ============================================ -->
        <!-- HEADER                                       -->
        <!-- ============================================ -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Layout</div>
          <div :style="sectionTitleStyle">MuiHeader</div>
          <MuiHeader
            logo-src="/img/musizi-logo.svg"
            logo-alt="Musizi University"
            logo-url="/"
            cta-url="/donate"
            cta-text="Donate"
          >
            <template #menu>
              <HeaderMenu :menu-items="menuItems" />
            </template>
          </MuiHeader>
        </div>

        <!-- MuiHeaderBlurBg -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Layout</div>
          <div :style="sectionTitleStyle">MuiHeaderBlurBg</div>
          <div style="background: linear-gradient(135deg, #C10230 0%, #75308C 100%); min-height: 120px; padding: 0;">
            <MuiHeaderBlurBg :button="{ text: 'GET IN TOUCH', href: '/contact' }">
              <template #logo>
                <MuiLogoUniversity :width="200" />
              </template>
            </MuiHeaderBlurBg>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- CORE COMPONENTS                              -->
        <!-- ============================================ -->

        <!-- Buttons -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Core</div>
          <div :style="sectionTitleStyle">MuiButton</div>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <MuiButton label="Default" />
            <MuiButton label="Black Stroke" variant="black-stroke" />
            <MuiButton label="Red Fill" variant="red-fill" />
            <MuiButton label="Right Icon" variant="right-icon-red-fill" />
            <MuiButton label="Right Icon No Fill" variant="right-icon-no-fill" />
            <MuiButton label="Icon" variant="icon-only" icon="arrow_forward" />
            <MuiButton label="Small" size="small" />
            <MuiButton label="Large" size="large" />
            <MuiButton label="As Link" href="https://example.com" variant="red-fill" />
          </div>
          <div style="margin-top: 12px; padding: 16px; background: #333; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <MuiButton label="White Stroke" variant="white-stroke" />
            <MuiButton label="White Fill" variant="white-fill" />
            <MuiButton label="All White" variant="all-white" />
          </div>
        </div>

        <!-- Icons -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Core</div>
          <div :style="sectionTitleStyle">MuiIcon</div>
          <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
            <MuiIcon icon="ios_share" :size="24" color="#000" />
            <MuiIcon icon="ios_share" :size="48" color="#C10230" />
            <MuiIcon name="simple-icons:linkedin" :size="32" color="#0A66C2" />
            <MuiIcon name="simple-icons:youtube" :size="32" color="#FF0000" />
            <MuiIcon name="simple-icons:instagram" :size="32" color="#E4405F" />
            <MuiIcon name="simple-icons:facebook" :size="32" color="#1877F2" />
          </div>
        </div>

        <!-- Social Media -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Core</div>
          <div :style="sectionTitleStyle">MuiSocialMedia</div>
          <div style="display: flex; gap: 16px; background: #333; padding: 24px; border-radius: 8px;">
            <MuiSocialMedia platform="linkedin" href="#" size="lg" />
            <MuiSocialMedia platform="youtube" href="#" size="lg" />
            <MuiSocialMedia platform="instagram" href="#" size="lg" />
            <MuiSocialMedia platform="facebook" href="#" size="lg" />
            <MuiSocialMedia platform="twitter" href="#" size="lg" />
            <MuiSocialMedia platform="tiktok" href="#" size="lg" />
          </div>
        </div>

        <!-- Pattern -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Core</div>
          <div :style="sectionTitleStyle">MuiPattern</div>
          <div style="display: flex; gap: 32px; flex-wrap: wrap;">
            <div>
              <p style="font-size: 0.875rem; color: #666; margin-bottom: 8px;">1 strip</p>
              <MuiPattern :strips="1" />
            </div>
            <div>
              <p style="font-size: 0.875rem; color: #666; margin-bottom: 8px;">3 strips</p>
              <MuiPattern :strips="3" />
            </div>
            <div>
              <p style="font-size: 0.875rem; color: #666; margin-bottom: 8px;">5 strips</p>
              <MuiPattern :strips="5" />
            </div>
          </div>
        </div>

        <!-- Logos -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Core</div>
          <div :style="sectionTitleStyle">Logos</div>
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div>
              <p style="margin-bottom: 8px; font-weight: bold; font-size: 0.875rem;">Business</p>
              <MuiLogoBusiness />
            </div>
            <div>
              <p style="margin-bottom: 8px; font-weight: bold; font-size: 0.875rem;">Foundation</p>
              <MuiLogoFoundation />
            </div>
            <div>
              <p style="margin-bottom: 8px; font-weight: bold; font-size: 0.875rem;">Health</p>
              <MuiLogoHealth />
            </div>
            <div>
              <p style="margin-bottom: 8px; font-weight: bold; font-size: 0.875rem;">MU</p>
              <MuiLogoMu />
            </div>
            <div>
              <p style="margin-bottom: 8px; font-weight: bold; font-size: 0.875rem;">University</p>
              <MuiLogoUniversity />
            </div>
            <div>
              <p style="margin-bottom: 8px; font-weight: bold; font-size: 0.875rem;">Wings</p>
              <MuiLogoWings />
            </div>
          </div>
        </div>

        <!-- MuiPageContainer -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Layout</div>
          <div :style="sectionTitleStyle">MuiPageContainer</div>
          <MuiPageContainer>
            <div style="background: #f3f4f6; padding: 2rem; border-radius: 8px;">
              <h2 style="font-family: Poppins, sans-serif; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Page Container</h2>
              <p style="font-family: Open Sans, sans-serif;">Content centered with max-width 1280px and responsive padding.</p>
            </div>
          </MuiPageContainer>
        </div>

        <!-- ============================================ -->
        <!-- BANNERS                                      -->
        <!-- ============================================ -->

        <!-- MuiBannerInsetCard -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Banners</div>
            <div :style="sectionTitleStyle">MuiBannerInsetCard</div>
          </div>
          <MuiBannerInsetCard
            :background-image="bannerImage"
            :action="{ label: 'Programmes', url: '/schools' }"
            @action-click="onActionClick"
          >
            <template #title>
              <div>GIVING YOU</div>
              <div class="font-bold">WINGS FOR LIFE</div>
            </template>
          </MuiBannerInsetCard>
        </div>

        <!-- MuiBannerWithSlash -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Banners</div>
            <div :style="sectionTitleStyle">MuiBannerWithSlash</div>
          </div>
          <MuiBannerWithSlash
            :background-image="bannerImage"
            :action="{ label: 'Our Programs', url: '/programs' }"
            @action-click="onActionClick"
          >
            <template #title>Intentional Success, Enduring Legacies</template>
          </MuiBannerWithSlash>
        </div>

        <!-- MuiBannerWithBleeding -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Banners</div>
            <div :style="sectionTitleStyle">MuiBannerWithBleeding</div>
          </div>
          <MuiBannerWithBleeding
            :background-image="bannerImage2"
            :action="{ label: 'Read more', url: '/programmes/cybersecurity' }"
            @action-click="onActionClick"
          >
            <template #title>The Cybersecurity Programme</template>
            <template #default>
              <p>The Cybersecurity Programme equips professionals to be prepared to address the growing challenges associated with privacy and security.</p>
            </template>
          </MuiBannerWithBleeding>
        </div>

        <!-- MuiBannerVideoModal -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Banners</div>
            <div :style="sectionTitleStyle">MuiBannerVideoModal</div>
          </div>
          <MuiBannerVideoModal
            :background-image="{ small: '/img/banners/family-enterprises-banner-sm.jpg', large: '/img/banners/family-enterprises-banner-lg.jpg', alt: 'Family enterprises banner' }"
            :video-thumbnail="videoThumbnail"
            @play="onPlay"
          >
            Families in Business Programme 2024
          </MuiBannerVideoModal>
        </div>

        <!-- MuiBlurredBackgroundBanner -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Banners</div>
            <div :style="sectionTitleStyle">MuiBlurredBackgroundBanner</div>
          </div>
          <MuiBlurredBackgroundBanner
            :background-image="bannerImage3"
            overlay-color="#5e024f"
            :show-scroll-indicator="false"
          >
            <template #caption>Why We Do This</template>
            <template #title>It Matters, For A Better World</template>
            <template #default>
              <p>Welcome to Musizi University Foundation, dedicated to shaping the future of African leadership through higher education.</p>
            </template>
          </MuiBlurredBackgroundBanner>
        </div>

        <!-- MuiBlurredTitleOnlyBanner -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Banners</div>
            <div :style="sectionTitleStyle">MuiBlurredTitleOnlyBanner</div>
          </div>
          <MuiBlurredTitleOnlyBanner
            title="News"
            :is-offset="false"
            :background-image="bannerImage4"
          />
        </div>

        <!-- MuiPageBannerText -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Banners</div>
            <div :style="sectionTitleStyle">MuiPageBannerText</div>
          </div>
          <MuiPageBannerText
            :background-image="bannerImage5"
            overlay-color="maroon"
            :show-scroll-indicator="false"
          >
            <template #caption>Donate</template>
            <template #title>Empower. Engage. Elevate: Donate and Drive Change</template>
            <template #subcaption>Donate now and be a part of the Musizi University legacy!</template>
          </MuiPageBannerText>
        </div>

        <!-- MuiTopStripBanner -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Banners</div>
            <div :style="sectionTitleStyle">MuiTopStripBanner</div>
          </div>
          <MuiTopStripBanner
            :image="bannerImage6"
            theme="light"
            :compact="false"
          >
            <template #caption>An Experienced Team</template>
            <template #title>Leadership</template>
            <template #default>
              <p>Our leadership team is comprised of experienced professionals with a mix of academic and business backgrounds.</p>
            </template>
          </MuiTopStripBanner>
        </div>

        <!-- ============================================ -->
        <!-- CARDS                                        -->
        <!-- ============================================ -->

        <!-- MuiProfileCard -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Cards</div>
          <div :style="sectionTitleStyle">MuiProfileCard</div>
          <div style="max-width: 350px;">
            <MuiProfileCard
              img-src="https://placehold.co/300x245"
              img-alt="Profile photo"
              title="Jane Doe"
              description="Jane is an experienced professional with expertise in her field. She brings over 15 years of experience to the team."
              url="/team/jane-doe"
              button-text="Read more"
            />
          </div>
        </div>

        <!-- MuiNumberedCard -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Cards</div>
          <div :style="sectionTitleStyle">MuiNumberedCard</div>
          <MuiNumberedCard
            img-src="https://placehold.co/400x300"
            img-alt="Card image"
            title="Feature Title"
            image-position="right"
          >
            <p>This is the card content that appears below the title. It supports any HTML content through the default slot.</p>
          </MuiNumberedCard>
        </div>

        <!-- MuiNumberedDigitCard -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Cards</div>
          <div :style="sectionTitleStyle">MuiNumberedDigitCard</div>
          <div style="display: flex; gap: 24px; flex-wrap: wrap;">
            <MuiNumberedDigitCard number="1" title="Donate to the Student Seed Capital Fund">
              <p>Your financial contribution will directly fund grants awarded to deserving students.</p>
            </MuiNumberedDigitCard>
            <MuiNumberedDigitCard number="2" title="Volunteer Your Time">
              <p>Share your expertise and mentor students as they develop their projects.</p>
            </MuiNumberedDigitCard>
          </div>
        </div>

        <!-- MuiTitleAndButtonCard -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Cards</div>
          <div :style="sectionTitleStyle">MuiTitleAndButtonCard</div>
          <MuiTitleAndButtonCard url="#">
            Are you ready to step up your family business?
          </MuiTitleAndButtonCard>
        </div>

        <!-- MuiTextAndButtonCard -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Cards</div>
          <div :style="sectionTitleStyle">MuiTextAndButtonCard</div>
          <MuiTextAndButtonCard>
            By supporting the development of these structures, you will help create a thriving environment that nurtures every aspect of our students' university experience.
          </MuiTextAndButtonCard>
        </div>

        <!-- MuiTextDateButtonCard -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Cards</div>
          <div :style="sectionTitleStyle">MuiTextDateButtonCard</div>
          <div style="max-width: 400px;">
            <MuiTextDateButtonCard
              :article="{
                title: 'Sample Article Title',
                description: 'This is a sample description for the article card.',
                url: '',
                imgUrl: '',
                date: '2024-08-21T00:00:00.000Z',
                isVideo: false,
              }"
            />
          </div>
        </div>

        <!-- MuiBannerTitleWithButtons -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Cards</div>
            <div :style="sectionTitleStyle">MuiBannerTitleWithButtons</div>
          </div>
          <MuiBannerTitleWithButtons />
        </div>

        <!-- MuiTitleButtonsWithInsetCard -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Cards</div>
            <div :style="sectionTitleStyle">MuiTitleButtonsWithInsetCard</div>
          </div>
          <MuiTitleButtonsWithInsetCard />
        </div>

        <!-- ============================================ -->
        <!-- CONTENT                                      -->
        <!-- ============================================ -->

        <!-- MuiTextBlock -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Content</div>
          <div :style="sectionTitleStyle">MuiTextBlock</div>
          <MuiTextBlock :button="{ label: 'View Programs', href: '/programs' }">
            <template #title>Welcome to Musizi University</template>
            <template #body>
              <p>Musizi University is a leading institution committed to excellence in education, research, and community service. We prepare students to be leaders and innovators in their chosen fields.</p>
            </template>
          </MuiTextBlock>
        </div>

        <!-- MuiTextWithImage -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Content</div>
          <div :style="sectionTitleStyle">MuiTextWithImage</div>
          <MuiTextWithImage
            :img="sampleImage"
            img-alt="Section image"
            :button="{ url: '/learn-more', text: 'Discover More', variant: 'red-fill' }"
          >
            <template #title>About Our Mission</template>
            <p>This is the content area where you can add any text, lists, or other HTML elements alongside the image.</p>
          </MuiTextWithImage>
        </div>

        <!-- MuiBlockQuoteYear -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Content</div>
          <div :style="sectionTitleStyle">MuiBlockQuoteYear</div>
          <div style="display: flex; gap: 24px; flex-wrap: wrap;">
            <MuiBlockQuoteYear year="2023" colour-class-name="bg-orange-600">
              <p>Musizi Educational Services incorporated in Uganda.</p>
            </MuiBlockQuoteYear>
            <MuiBlockQuoteYear year="2024" colour-class-name="bg-blue-600">
              <p>Another important year with different styling.</p>
            </MuiBlockQuoteYear>
          </div>
        </div>

        <!-- MuiLogoButtonCard -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Content</div>
            <div :style="sectionTitleStyle">MuiLogoButtonCard</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
            <MuiLogoButtonCard :button="{ text: 'Learn More', href: '/foundation' }">
              <template #Image>
                <MuiLogoFoundation :width="200" />
              </template>
              <template #Text>
                <div class="mui-text--headline-2 uppercase">
                  <span class="font-light">Intentional Success</span>
                  <br>
                  Enduring Legacies
                </div>
              </template>
            </MuiLogoButtonCard>

            <MuiLogoButtonCard :button="{ text: 'Explore', href: '/university' }" class="bg-purple">
              <template #Image>
                <MuiLogoUniversity :width="200" />
              </template>
              <template #Text>
                <p class="mui-text--headline-3 font-poppins uppercase tracking-wide">Excellence in</p>
                <p class="mui-text--headline-2 font-poppins font-bold uppercase tracking-wide">Education</p>
              </template>
            </MuiLogoButtonCard>

            <MuiLogoButtonCard :button="{ text: 'Partner', href: '/business' }" class="bg-cool-grey">
              <template #Image>
                <MuiLogoBusiness :width="200" />
              </template>
              <template #Text>
                <p class="mui-text--headline-3 font-poppins uppercase tracking-wide">Building</p>
                <p class="mui-text--headline-2 font-poppins font-bold uppercase tracking-wide">Future Leaders</p>
              </template>
            </MuiLogoButtonCard>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- CAROUSEL                                     -->
        <!-- ============================================ -->
        <div :style="sectionStyle">
          <div :style="sectionHeadingStyle">Components</div>
          <div :style="sectionTitleStyle">MuiCarousel</div>
          <div style="max-width: 1200px; margin: 0 auto;">
            <MuiCarousel show-arrows show-dots loop style="height: 400px;">
              <MuiCarouselItem
                v-for="(slide, index) in carouselSlides"
                :key="index"
                :src="slide.src"
                :alt="slide.alt"
                variant="image"
              />
            </MuiCarousel>
          </div>
        </div>

        <!-- ============================================ -->
        <!-- NEWSLETTER                                   -->
        <!-- ============================================ -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Other</div>
            <div :style="sectionTitleStyle">MuiNewsletterButtonLink</div>
          </div>
          <MuiNewsletterButtonLink
            button-href="https://example.com/newsletter-signup"
            class="bg-maroon p-8"
          />
        </div>

        <!-- ============================================ -->
        <!-- FOOTER                                       -->
        <!-- ============================================ -->
        <div :style="sectionStyle" style="padding-left: 0; padding-right: 0; border-bottom: none;">
          <div style="padding: 0 1.5rem;">
            <div :style="sectionHeadingStyle">Layout</div>
            <div :style="sectionTitleStyle">Footer</div>
          </div>
          <MuiFooterContacts :container-classes="['bg-maroon', 'text-white', 'py-11']" />
          <MuiFooterCredits :container-classes="['text-white', 'py-7']" class="bg-maroon" />
        </div>
      </div>
    `,
  }),
}
