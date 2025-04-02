import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface ContactFormProps {
  accentColor?: string
  buttonText?: string
}

export default function ContactForm({ accentColor = "#D35C37", buttonText = "SUBMIT" }: ContactFormProps) {
  const hoverColor = accentColor === "#D35C37" ? "#B34D2E" : accentColor === "#3D7A7A" ? "#2D5A5A" : "#A17A30"

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`w-full p-2 sm:p-3 border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`w-full p-2 sm:p-3 border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full p-2 sm:p-3 border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={`w-full p-2 sm:p-3 border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
            Postcode / Zip
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            className={`w-full p-2 sm:p-3 border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className={`w-full p-2 sm:p-3 border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
          Where did you hear about us? *
        </label>
        <Select>
          <SelectTrigger
            className={`w-full border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          >
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="internet">Internet Search</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="friend">Friend or Family</SelectItem>
            <SelectItem value="agent">Real Estate Agent</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">I am interested in: *</label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="valencia" />
            <label htmlFor="valencia" className="text-sm text-gray-700">
              The Valencia - Three Bedroom Unit Types
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marbella" />
            <label htmlFor="marbella" className="text-sm text-gray-700">
              The Marbella - Three Bedroom Unit Types
            </label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="agent" className="block text-sm font-medium text-gray-700 mb-1">
          Are you working with a Real Estate Agent? *
        </label>
        <Select>
          <SelectTrigger
            className={`w-full border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          >
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="isAgent" className="block text-sm font-medium text-gray-700 mb-1">
          Are you an Agent?
        </label>
        <Select defaultValue="no">
          <SelectTrigger
            className={`w-full border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none`}
          >
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
          Comments or Questions
        </label>
        <Textarea
          id="comments"
          placeholder="Additional comments or questions"
          className={`w-full p-2 sm:p-3 border border-gray-300 focus:border-[${accentColor}] focus:ring-1 focus:ring-[${accentColor}] outline-none min-h-[120px]`}
        />
      </div>

      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          className={`bg-[${accentColor}] hover:bg-[${hoverColor}] text-white border-none rounded-none px-12 py-4 text-lg font-medium tracking-wider w-full sm:w-auto`}
          style={{ backgroundColor: accentColor }}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  )
}

