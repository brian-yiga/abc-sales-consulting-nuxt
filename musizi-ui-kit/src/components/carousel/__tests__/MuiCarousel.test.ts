import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import MuiCarousel from '../MuiCarousel.vue'
import MuiCarouselItem from '../MuiCarouselItem.vue'

// Mock embla-carousel-vue
vi.mock('embla-carousel-vue', () => ({
  default: () => {
    const emblaApi = {
      value: {
        scrollPrev: vi.fn(),
        scrollNext: vi.fn(),
        scrollTo: vi.fn(),
        canScrollPrev: vi.fn(() => true),
        canScrollNext: vi.fn(() => true),
        selectedScrollSnap: vi.fn(() => 0),
        scrollSnapList: vi.fn(() => [0, 1, 2]),
        on: vi.fn(),
        off: vi.fn(),
      },
    }
    const emblaRef = { value: null }
    return [emblaRef, emblaApi]
  },
}))

// Mock embla plugins
vi.mock('embla-carousel-autoplay', () => ({
  default: vi.fn(() => ({})),
}))

vi.mock('embla-carousel-auto-scroll', () => ({
  default: vi.fn(() => ({})),
}))

describe('MuiCarousel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const createWrapper = (props = {}, slots = {}) => {
    return mount(MuiCarousel, {
      props,
      slots,
      global: {
        stubs: {
          MuiCarouselItem: true,
        },
      },
    })
  }

  describe('rendering', () => {
    it('renders the carousel container', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('.mui-carousel').exists()).toBe(true)
    })

    it('renders the viewport', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('.mui-carousel__viewport').exists()).toBe(true)
    })

    it('renders the container for slides', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('.mui-carousel__container').exists()).toBe(true)
    })

    it('renders slot content', () => {
      const wrapper = createWrapper(
        {},
        {
          default: '<div class="test-slide">Slide 1</div>',
        },
      )
      expect(wrapper.find('.test-slide').exists()).toBe(true)
    })
  })

  describe('navigation arrows', () => {
    it('hides arrows by default', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('.mui-carousel__arrow--prev').exists()).toBe(false)
      expect(wrapper.find('.mui-carousel__arrow--next').exists()).toBe(false)
    })

    it('shows arrows when showArrows is true', () => {
      const wrapper = createWrapper({ showArrows: true })
      expect(wrapper.find('.mui-carousel__arrow--prev').exists()).toBe(true)
      expect(wrapper.find('.mui-carousel__arrow--next').exists()).toBe(true)
    })

    it('prev button has correct aria-label', () => {
      const wrapper = createWrapper({ showArrows: true })
      const prevButton = wrapper.find('.mui-carousel__arrow--prev')
      expect(prevButton.attributes('aria-label')).toBe('Previous slide')
    })

    it('next button has correct aria-label', () => {
      const wrapper = createWrapper({ showArrows: true })
      const nextButton = wrapper.find('.mui-carousel__arrow--next')
      expect(nextButton.attributes('aria-label')).toBe('Next slide')
    })

    it('renders SVG icons in arrow buttons', () => {
      const wrapper = createWrapper({ showArrows: true })
      expect(wrapper.find('.mui-carousel__arrow--prev svg').exists()).toBe(true)
      expect(wrapper.find('.mui-carousel__arrow--next svg').exists()).toBe(true)
    })
  })

  describe('navigation dots', () => {
    it('shows dots when showDots is true and there are multiple slides', async () => {
      const wrapper = createWrapper({ showDots: true })
      await nextTick()
      // Dots only show when scrollSnaps.length > 1
      expect(wrapper.find('.mui-carousel__dots').exists()).toBe(true)
    })

    it('hides dots by default', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('.mui-carousel__dots').exists()).toBe(false)
    })

    it('renders correct number of dots based on scroll snaps', async () => {
      const wrapper = createWrapper({ showDots: true })
      await nextTick()
      const dots = wrapper.findAll('.mui-carousel__dot')
      expect(dots.length).toBe(3) // Based on mock scrollSnapList
    })

    it('dots have correct aria-labels', async () => {
      const wrapper = createWrapper({ showDots: true })
      await nextTick()
      const dots = wrapper.findAll('.mui-carousel__dot')
      expect(dots[0].attributes('aria-label')).toBe('Go to slide 1')
      expect(dots[1].attributes('aria-label')).toBe('Go to slide 2')
      expect(dots[2].attributes('aria-label')).toBe('Go to slide 3')
    })
  })

  describe('props', () => {
    it('applies vertical class when orientation is vertical', () => {
      const wrapper = createWrapper({ orientation: 'vertical' })
      expect(wrapper.find('.mui-carousel--vertical').exists()).toBe(true)
    })

    it('does not apply vertical class for horizontal orientation', () => {
      const wrapper = createWrapper({ orientation: 'horizontal' })
      expect(wrapper.find('.mui-carousel--vertical').exists()).toBe(false)
    })

    it('applies containerClass to container', () => {
      const wrapper = createWrapper({ containerClass: 'gap-6' })
      const container = wrapper.find('.mui-carousel__container')
      expect(container.classes()).toContain('gap-6')
    })

    it('has empty containerClass by default', () => {
      const wrapper = createWrapper()
      const container = wrapper.find('.mui-carousel__container')
      // Should not have any gap classes by default
      expect(container.classes().filter((c) => c.startsWith('gap-')).length).toBe(0)
    })
  })

  describe('default prop values', () => {
    it('has showArrows defaulting to false', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('.mui-carousel__arrow').exists()).toBe(false)
    })

    it('has showDots defaulting to false', async () => {
      const wrapper = createWrapper()
      await nextTick()
      expect(wrapper.find('.mui-carousel__dots').exists()).toBe(false)
    })

    it('has horizontal orientation by default', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('.mui-carousel--vertical').exists()).toBe(false)
    })
  })
})

describe('MuiCarousel with MuiCarouselItem', () => {
  it('renders carousel items as children', () => {
    const wrapper = mount(MuiCarousel, {
      slots: {
        default: [
          '<div class="slide-1">Slide 1</div>',
          '<div class="slide-2">Slide 2</div>',
          '<div class="slide-3">Slide 3</div>',
        ],
      },
    })

    expect(wrapper.find('.slide-1').exists()).toBe(true)
    expect(wrapper.find('.slide-2').exists()).toBe(true)
    expect(wrapper.find('.slide-3').exists()).toBe(true)
  })

  it('renders MuiCarouselItem components', () => {
    const wrapper = mount(MuiCarousel, {
      global: {
        components: { MuiCarouselItem },
      },
      slots: {
        default: `
          <MuiCarouselItem src="https://example.com/1.jpg" alt="Image 1" />
          <MuiCarouselItem src="https://example.com/2.jpg" alt="Image 2" />
        `,
      },
    })

    const items = wrapper.findAllComponents(MuiCarouselItem)
    expect(items.length).toBe(2)
  })
})
